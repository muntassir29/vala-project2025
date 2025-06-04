import { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/goals';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'weekly',
    dueDate: '',
  });

  // Chargement des objectifs
  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (Array.isArray(res.data)) {
        setGoals(res.data);
      } else {
        toast.error('Format des données reçu invalide');
        setGoals([]);
      }
    } catch (error) {
      toast.error('Erreur lors du chargement des objectifs');
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  // Gestion du formulaire
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(API_URL, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Objectif ajouté 🎯');
      setForm({ title: '', description: '', type: 'weekly', dueDate: '' });
      setGoals([res.data, ...goals]);
    } catch (error) {
      toast.error("Erreur lors de l'ajout");
    }
  };

  // Toggle statut complété
  const toggleComplete = async (id, completed) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        `${API_URL}/${id}`,
        { completed: !completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGoals(goals.map((goal) => (goal._id === id ? res.data : goal)));
    } catch (error) {
      toast.error('Erreur lors de la mise à jour');
    }
  };

  // Suppression d’un objectif
  const deleteGoal = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Objectif supprimé 🗑️');
      setGoals(goals.filter((goal) => goal._id !== id));
    } catch (error) {
      toast.error('Erreur lors de la suppression');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">🎯 Objectifs</h1>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-8 border border-gray-100"
      >
        <h2 className="text-xl font-semibold mb-4">Ajouter un objectif</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={form.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input input-bordered w-full"
          >
            <option value="weekly">Hebdomadaire</option>
            <option value="monthly">Mensuel</option>
          </select>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FaPlus /> Ajouter
        </button>
      </form>

      {/* Liste des objectifs */}
      <div className="space-y-4">
        {goals.length === 0 ? (
          <p className="text-gray-500">Aucun objectif trouvé.</p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal._id}
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex justify-between items-center"
            >
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    goal.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {goal.title}
                </h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
                <p className="text-xs text-gray-400">
                  {goal.type === 'weekly' ? '🗓️ Hebdomadaire' : '📅 Mensuel'} — À
                  faire avant : {new Date(goal.dueDate).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleComplete(goal._id, goal.completed)}
                  className={`p-2 rounded-full ${
                    goal.completed
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  } hover:scale-105 transition`}
                  title="Changer le statut"
                >
                  {goal.completed ? <FaTimes /> : <FaCheck />}
                </button>
                <button
                  onClick={() => deleteGoal(goal._id)}
                  className="p-2 rounded-full bg-red-100 text-red-700 hover:scale-105 transition"
                  title="Supprimer"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Goals;


