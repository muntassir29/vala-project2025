// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173', // Frontend URL for dev
      credentials: true, // For cookies
    })
  );
}
app.use(express.json()); // To parse JSON requests

// API Routes
const authRoutes = require('./routes/authRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const noteRoutes = require('./routes/noteRoutes');
const goalRoutes = require('./routes/goalRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/goals', goalRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check route (dev only)
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('API Trading Journal is running ✅');
  });
}

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
