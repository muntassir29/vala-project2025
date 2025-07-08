const express = require('express');
const router = express.Router();
const {
  createTrade,
  getTrades,
  updateTrade,
  deleteTrade,
  getTradeStats,
  searchTrades,
  getStrategyStats,
  getMonthlyStats
} = require('../controllers/tradeController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

/**
 * 🚨 IMPORTANT:
 * Place static routes BEFORE dynamic ones like "/:id"
 * Otherwise, Express + path-to-regexp may interpret paths like "/stats" as ":id"
 */

// ✅ Static routes FIRST
router.get('/stats/monthly', protect, getMonthlyStats);
router.get('/strategies/stats', protect, getStrategyStats);
router.get('/stats', protect, getTradeStats);
router.get('/search', protect, searchTrades);

// ✅ Main collection routes
router.post('/', protect, createTrade);
router.get('/', protect, getTrades);

// ✅ Dynamic routes LAST (to prevent path-to-regexp conflict)
router.put('/:id', updateTrade);
router.delete('/:id', deleteTrade);

// Optional: add a GET by ID route if needed
// router.get('/:id', protect, getTradeById);

// ✅ Upload route (also uses :id)
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
