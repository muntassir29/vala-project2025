const express = require('express');
const router = express.Router();
const { createTrade, getTrades, updateTrade, deleteTrade, getTradeStats, searchTrades } = require('../controllers/tradeController');
const { protect } = require('../middleware/authMiddleware');

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

module.exports = router;
