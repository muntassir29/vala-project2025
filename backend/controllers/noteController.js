const Note = require('../models/Note');

// Créer une note
const createNote = async (req, res) => {
  try {
    const { content, period } = req.body;

    const note = new Note({
      content,
      period,
      user: req.user.id,
    });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création de la note' });
  }
};

// Obtenir toutes les notes de l'utilisateur
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des notes' });
  }
};

// Mettre à jour une note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!note) return res.status(404).json({ message: "Note non trouvée" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Supprimer une note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!note) return res.status(404).json({ message: "Note non trouvée" });
    res.json({ message: "Note supprimée ✅" });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
