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

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const path = require('path');

// dotenv.config();
// connectDB();

// const app = express();

// // -------------------- CORS --------------------
// if (process.env.NODE_ENV !== 'production') {
//   app.use(
//     cors({
//       origin: 'http://localhost:5173',
//       credentials: true,
//     })
//   );
// }

// app.use(express.json());

// // -------------------- ROUTES --------------------
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/trades', require('./routes/tradeRoutes'));
// app.use('/api/notes', require('./routes/noteRoutes'));
// app.use('/api/goals', require('./routes/goalRoutes'));

// // -------------------- UPLOADS --------------------
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // -------------------- Serve Frontend --------------------
// if (process.env.NODE_ENV === 'production') {
//   const buildPath = path.join(__dirname, 'client', 'dist'); // ✅ le bon chemin
//   app.use(express.static(buildPath));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Middleware CORS pour le développement uniquement
if (process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );
}

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

// Servir les fichiers uploadés
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -------------------- Serve Frontend in Production --------------------

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'frontend', 'dist'); // ✅ correct pour Render structure
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// -------------------- Start Server --------------------

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});





