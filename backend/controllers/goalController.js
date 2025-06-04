const Goal = require('../models/Goal');

// Créer un objectif
const createGoal = async (req, res) => {
  try {
    const { title, description, type, dueDate } = req.body;
    const goal = new Goal({
      user: req.user.id,
      title,
      description,
      type,
      dueDate,
    });
    const savedGoal = await goal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l’objectif' });
  }
};

// Récupérer tous les objectifs de l’utilisateur
const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des objectifs' });
  }
};

// Mettre à jour un objectif
const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: "Objectif non trouvé" });

    if (goal.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non autorisé" });
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour' });
  }
};

// Supprimer un objectif

// const deleteGoal = async (req, res) => {
//   try {
//     const goal = await Goal.findById(req.params.id);
//     if (!goal) return res.status(404).json({ message: "Objectif non trouvé" });

//     if (goal.user.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Non autorisé" });
//     }

//     await goal.remove();
//     res.json({ message: "Objectif supprimé avec succès ✅" });
//   } catch (error) {
//     res.status(500).json({ message: 'Erreur lors de la suppression' });
//   }
// };

const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).json({ message: "Objectif non trouvé" });
    }

    if (goal.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non autorisé" });
    }

    await Goal.findByIdAndDelete(req.params.id); // ✅ suppression propre

    res.json({ message: "Objectif supprimé avec succès ✅" });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error); // pour debug
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};


module.exports = {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,
};
