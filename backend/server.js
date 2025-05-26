// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Charger les variables d’environnement
dotenv.config();

// Connexion à la base de données MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // pour lire le JSON dans les requêtes

// Routes
app.get('/', (req, res) => {
  res.send('API Trading Journal is running ✅');
});

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
