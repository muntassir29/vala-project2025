// backend/models/Trade.js

const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema(
  {
    pair: {
      type: String,
      required: true,
    },
    dateOpen: {
      type: Date,
      required: true,
    },
    dateClosed: {
      type: Date,
      required: true,
    },
    direction: {
      type: String,
      enum: ['Buy', 'Sell'],
      required: true,
    },
    result: {
      type: Number,
      required: true,
    },
    winOrLoss: {
      type: String,
      enum: ['Win', 'Loss'],
      required: true,
    },
    comment: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
