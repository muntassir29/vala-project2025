// // backend/server.js

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const path = require('path');

// // Charger les variables d’environnement
// dotenv.config();

// // Connexion à la base de données MongoDB
// connectDB();

// const app = express();

// // Middleware CORS pour le développement uniquement
// if (process.env.NODE_ENV !== 'production') {
//   app.use(
//     cors({
//       origin: 'http://localhost:5173', // URL de votre frontend local (Vite)
//       credentials: true,
//     })
//   );
// }

// // Middleware JSON
// app.use(express.json());

// // Routes de test
// if (process.env.NODE_ENV !== 'production') {
//   app.get('/', (req, res) => {
//     res.send('API Trading Journal is running ✅');
//   });
// }

// // Importation des routes
// const authRoutes = require('./routes/authRoutes');
// const tradeRoutes = require('./routes/tradeRoutes');
// const noteRoutes = require('./routes/noteRoutes');
// const goalRoutes = require('./routes/goalRoutes');

// // Utilisation des routes
// app.use('/api/auth', authRoutes);
// app.use('/api/trades', tradeRoutes);
// app.use('/api/notes', noteRoutes);
// app.use('/api/goals', goalRoutes);

// // Servir les fichiers uploadés
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // -------------------- Serve Frontend in Production --------------------

// if (process.env.NODE_ENV === 'production') {
//   const buildPath = path.join(__dirname, 'build');
//   app.use(express.static(buildPath));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'));
//   });
// }

// // -------------------- Start Server --------------------

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


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

// 🔒 Indispensable pour les cookies sécurisés sur Render
app.set("trust proxy", 1);

// ✅ Gérer le CORS pour dev + production
const allowedOrigins = [
  'http://localhost:5173', // Dev Vite
  'https://trading-journal-am1b.onrender.com', // Frontend Render
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Middleware JSON
app.use(express.json());

// Routes de test
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('API Trading Journal is running ✅');
  });
}

// Importation des routes
const authRoutes = require('./routes/authRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const noteRoutes = require('./routes/noteRoutes');
const goalRoutes = require('./routes/goalRoutes');

// Utilisation des routes
app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/goals', goalRoutes);

// Servir les fichiers uploadés (images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -------------------- Serve Frontend in Production --------------------

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'build');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// -------------------- Start Server --------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

