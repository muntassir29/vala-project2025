// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

// Charger les variables d’environnement
dotenv.config();

// Connexion à la base de données MongoDB
connectDB();

const app = express();


// Middleware
if(process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true, // Pour les cookies
  }));
}
app.use(express.json()); // pour lire le JSON dans les requêtes

// Routes
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('API Trading Journal is running ✅');
  });
}

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const tradeRoutes = require('./routes/tradeRoutes');
app.use('/api/trades', tradeRoutes);


// Routes NOTES
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);

// Routes GOAL
const goalRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalRoutes);

// Routes UPLOAD
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
