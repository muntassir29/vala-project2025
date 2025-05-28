const express = require('express');
const router = express.Router();
const { createTrade, getTrades, updateTrade, deleteTrade, getTradeStats, searchTrades, getStrategyStats } = require('../controllers/tradeController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Route protégée : créer un trade
router.post('/', protect, createTrade);
// Route protégée : récupérer les trades
router.get('/', protect, getTrades);
// Route protégée : Updates les trades
router.put('/:id', updateTrade);
// Route protégée : Supprimé les trades
router.delete('/:id', deleteTrade);
// Route protégée : Stats les trades
router.get('/stats', protect, getTradeStats);
// Route protégée : filtrer les trades
router.get('/search', protect, searchTrades);
// Route protégée : Shema Statistique
router.get('/strategies/stats', protect, getStrategyStats);


// Route upload image (screenshot) associée à un trade
router.post('/:id/upload', protect, upload.single('screenshot'), async (req, res) => {
  try {
    const tradeId = req.params.id;

    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier uploadé' });
    }

    const Trade = require('../models/Trade');
    const updatedTrade = await Trade.findByIdAndUpdate(
      tradeId,
      { screenshot: req.file.path },
      { new: true }
    );

    if (!updatedTrade) return res.status(404).json({ message: 'Trade non trouvé' });

    res.json({ message: 'Image uploadée avec succès', trade: updatedTrade });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l’upload de l’image' });
  }
});

module.exports = router;
