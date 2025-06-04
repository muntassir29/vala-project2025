const Trade = require('../models/Trade');

// Créer un trade
const createTrade = async (req, res) => {
  const { pair, dateOpen, dateClosed, direction, result, winOrLoss, comment, strategy, } = req.body;

  try {
    const trade = new Trade({
      pair,
      dateOpen,
      dateClosed,
      direction,
      result,
      winOrLoss,
      comment,
      strategy,
      user: req.user.id, // récupéré grâce à l'auth middleware
    });

    const savedTrade = await trade.save();
    res.status(201).json(savedTrade);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du trade' });
  }
};

// GET /api/trades - Obtenir tous les trades de l'utilisateur connecté
const getTrades = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(trades);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des trades' });
  }
};

// Mettre à jour un trade existant
const updateTrade = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTrade = await Trade.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTrade) return res.status(404).json({ message: "Trade non trouvé" });

    res.status(200).json(updatedTrade);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Supprimer un trade
const deleteTrade = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Trade.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Trade non trouvé' });
    }

    res.json({ message: 'Trade supprimé avec succès ✅' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression' });
  }
};

const getTradeStats = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user._id });

    const total = trades.length;
    const wins = trades.filter(t => t.winOrLoss === 'Win');
    const losses = trades.filter(t => t.winOrLoss === 'Loss');

    const winCount = wins.length;
    const lossCount = losses.length;
    const winRate = total > 0 ? ((winCount / total) * 100).toFixed(2) : 0;

    const totalProfit = wins.reduce((acc, trade) => acc + trade.result, 0);
    const totalLoss = losses.reduce((acc, trade) => acc + Math.abs(trade.result), 0);
    const profitFactor = totalLoss > 0 ? (totalProfit / totalLoss).toFixed(2) : '∞';

    const avgRRWin = (winCount > 0) ? (totalProfit / winCount).toFixed(2) : 0;
    const avgRRLoss = (lossCount > 0) ? (-totalLoss / lossCount).toFixed(2) : 0;

    res.json({
      total,
      winCount,
      lossCount,
      winRate: `${winRate}%`,
      profitFactor,
      avgRRWin,
      avgRRLoss,
    });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors du calcul des statistiques' });
  }
};

// GET /api/trades/search
const searchTrades = async (req, res) => {
  const { pair, winOrLoss, startDate, endDate, comment } = req.query;

  const query = { user: req.user._id };

  if (pair) {
    query.pair = pair;
  }

  if (winOrLoss) {
    query.winOrLoss = winOrLoss;
  }

  if (startDate && endDate) {
    query.dateOpen = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  if (comment) {
    query.comment = { $regex: comment, $options: 'i' }; // insensitive
  }

  try {
    const trades = await Trade.find(query).sort({ dateOpen: -1 });
    res.json(trades);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur ❌' });
  }
};

// Stratégie Statistique : 

const getStrategyStats = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user._id });

    const strategies = {};

    trades.forEach(trade => {
      const strat = trade.strategy || 'Non spécifiée';
      if (!strategies[strat]) {
        strategies[strat] = {
          total: 0,
          wins: 0,
          losses: 0,
          totalProfit: 0,
          totalLoss: 0,
        };
      }

      strategies[strat].total += 1;

      if (trade.winOrLoss === 'Win') {
        strategies[strat].wins += 1;
        strategies[strat].totalProfit += trade.result;
      } else if (trade.winOrLoss === 'Loss') {
        strategies[strat].losses += 1;
        strategies[strat].totalLoss += Math.abs(trade.result);
      }
    });

    const result = Object.entries(strategies).map(([strategy, stats]) => {
      const winRate = (stats.total > 0)
        ? ((stats.wins / stats.total) * 100).toFixed(2)
        : '0';

      const profitFactor = (stats.totalLoss > 0)
        ? (stats.totalProfit / stats.totalLoss).toFixed(2)
        : '∞';

      return {
        strategy,
        ...stats,
        winRate: `${winRate}%`,
        profitFactor
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors du calcul des statistiques par stratégie" });
  }
};

const getMonthlyStats = async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user._id });

    const monthlyStats = {};

    trades.forEach(trade => {
      const date = new Date(trade.dateOpen);
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const key = `${month} ${year}`;

      if (!monthlyStats[key]) {
        monthlyStats[key] = {
          total: 0,
          wins: 0,
          losses: 0,
          totalProfit: 0,
          totalLoss: 0,
        };
      }

      monthlyStats[key].total += 1;

      if (trade.winOrLoss === 'Win') {
        monthlyStats[key].wins += 1;
        monthlyStats[key].totalProfit += trade.result;
      } else if (trade.winOrLoss === 'Loss') {
        monthlyStats[key].losses += 1;
        monthlyStats[key].totalLoss += Math.abs(trade.result);
      }
    });

    const result = Object.entries(monthlyStats).map(([month, stats]) => {
      const winRate = stats.total > 0
        ? ((stats.wins / stats.total) * 100).toFixed(2)
        : '0';

      const profitFactor = stats.totalLoss > 0
        ? (stats.totalProfit / stats.totalLoss).toFixed(2)
        : '∞';

      return {
        month,
        ...stats,
        winRate: `${winRate}%`,
        profitFactor,
      };
    }).sort((a, b) => {
      // Trier du plus ancien au plus récent
      const getDate = (m) => new Date(`${m.month} 1`);
      return getDate(a) - getDate(b);
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors du calcul des stats mensuelles" });
  }
};



module.exports = {
  createTrade,
  getTrades,
  updateTrade,
  deleteTrade,
  getTradeStats,
  searchTrades,
  getStrategyStats,
  getMonthlyStats, // ✅ ici
};
