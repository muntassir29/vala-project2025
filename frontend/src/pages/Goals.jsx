
// import { useEffect, useState } from 'react';
// import { FaPlus, FaTrash, FaCheck, FaTimes, FaBullseye, FaChartLine, FaLightbulb } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const API_URL = 'http://localhost:3000/api/goals';

// const conseils = [
//   {
//     icon: <FaBullseye className="text-indigo-400" size={30} />,
//     title: "Clarté & Focus",
//     text: "Définir des objectifs clairs permet de focaliser ton énergie et tes efforts sur ce qui compte vraiment.",
//   },
//   {
//     icon: <FaChartLine className="text-pink-400" size={30} />,
//     title: "Mesure & Suivi",
//     text: "Un journal et des objectifs précis facilitent le suivi des progrès et l’identification des axes d’amélioration.",
//   },
//   {
//     icon: <FaLightbulb className="text-yellow-400" size={30} />,
//     title: "Motivation & Discipline",
//     text: "Des objectifs bien définis renforcent la motivation et aident à maintenir la discipline sur le long terme.",
//   },
// ];

// const conseilsExtra = [
//   {
//     icon: <FaCheck className="text-green-400" size={28} />,
//     text: "Sois spécifique : un objectif vague n'aide pas à progresser.",
//   },
//   {
//     icon: <FaCheck className="text-green-400" size={28} />,
//     text: "Fixe des échéances réalistes pour garder le cap.",
//   },
//   {
//     icon: <FaCheck className="text-green-400" size={28} />,
//     text: "Révise régulièrement tes objectifs pour rester aligné.",
//   },
// ];

// const Goals = () => {
//   const [goals, setGoals] = useState([]);
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     type: 'weekly',
//     dueDate: '',
//   });

//   const fetchGoals = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get(API_URL, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (Array.isArray(res.data)) {
//         setGoals(res.data);
//       } else {
//         toast.error('Format des données reçu invalide');
//         setGoals([]);
//       }
//     } catch (error) {
//       toast.error('Erreur lors du chargement des objectifs');
//     }
//   };

//   useEffect(() => {
//     fetchGoals();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.post(API_URL, form, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Objectif ajouté 🎯');
//       setForm({ title: '', description: '', type: 'weekly', dueDate: '' });
//       setGoals([res.data, ...goals]);
//     } catch (error) {
//       toast.error("Erreur lors de l'ajout");
//     }
//   };

//   const toggleComplete = async (id, completed) => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.put(
//         `${API_URL}/${id}`,
//         { completed: !completed },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setGoals(goals.map((goal) => (goal._id === id ? res.data : goal)));
//     } catch (error) {
//       toast.error('Erreur lors de la mise à jour');
//     }
//   };

//   const deleteGoal = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success('Objectif supprimé 🗑️');
//       setGoals(goals.filter((goal) => goal._id !== id));
//     } catch (error) {
//       toast.error('Erreur lors de la suppression');
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-white text-gray-900 font-sans">
//       <div className="max-w-6xl mx-auto space-y-12">

//         <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-md">
//           🎯 Objectifs de Trading
//         </h1>

//         {/* Formulaire */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-100 shadow-md rounded-lg p-8 border border-gray-300 max-w-3xl mx-auto"
//         >
//           <h2 className="text-2xl font-semibold mb-6 text-indigo-700 border-b border-indigo-300 pb-3">
//             Ajouter un nouvel objectif
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="title"
//               placeholder="Titre"
//               value={form.title}
//               onChange={handleChange}
//               required
//               className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <select
//               name="type"
//               value={form.type}
//               onChange={handleChange}
//               className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option value="weekly">Hebdomadaire</option>
//               <option value="monthly">Mensuel</option>
//             </select>
//             <input
//               type="date"
//               name="dueDate"
//               value={form.dueDate}
//               onChange={handleChange}
//               className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <input
//               type="text"
//               name="description"
//               placeholder="Description"
//               value={form.description}
//               onChange={handleChange}
//               className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-6 w-full bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md px-6 py-3 rounded-lg hover:brightness-110 transition flex items-center justify-center gap-3 font-semibold"
//           >
//             <FaPlus /> Ajouter
//           </button>
//         </form>

//         {/* Liste des objectifs */}
//         <section className="max-w-4xl mx-auto space-y-4">
//           {goals.length === 0 ? (
//             <p className="text-center text-indigo-700 text-lg">Aucun objectif trouvé.</p>
//           ) : (
//             goals.map((goal) => (
//               <motion.div
//                 key={goal._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="max-w-[80%]">
//                   <h3
//                     className={`text-xl font-semibold ${
//                       goal.completed ? 'line-through text-gray-400' : 'text-gray-900'
//                     }`}
//                   >
//                     {goal.title}
//                   </h3>
//                   <p className="text-gray-700 mt-1">{goal.description}</p>
//                   <p className="text-sm text-gray-500 mt-1 select-none">
//                     {goal.type === 'weekly' ? '🗓️ Hebdomadaire' : '📅 Mensuel'} — À faire avant :{' '}
//                     {new Date(goal.dueDate).toLocaleDateString('fr-FR')}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => toggleComplete(goal._id, goal.completed)}
//                     className={`p-3 rounded-full shadow-sm transition transform hover:scale-110 ${
//                       goal.completed
//                         ? 'bg-yellow-400 text-yellow-900'
//                         : 'bg-green-400 text-green-900'
//                     }`}
//                     title="Changer le statut"
//                   >
//                     {goal.completed ? <FaTimes size={18} /> : <FaCheck size={18} />}
//                   </button>
//                   <button
//                     onClick={() => deleteGoal(goal._id)}
//                     className="p-3 rounded-full bg-red-400 text-red-900 shadow-sm hover:scale-110 transition transform"
//                     title="Supprimer"
//                   >
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </section>

//         {/* NOUVELLE SECTION AVANT "Pourquoi définir..." */}
//         <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-10 shadow-md space-y-6 text-center">
//           <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//             Conseils pour bien définir tes objectifs
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {conseilsExtra.map(({ icon, text }, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.3, duration: 0.5 }}
//                 className="flex flex-col items-center text-indigo-700 text-lg"
//               >
//                 <div className="mb-3">{icon}</div>
//                 <p>{text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Section conseils principale */}
//         <section className="max-w-4xl mx-auto bg-indigo-50 rounded-lg p-10 shadow-lg text-gray-900">
//           <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
//             Pourquoi définir des objectifs dans le trading ?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {conseils.map(({ icon, title, text }, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.3, duration: 0.6 }}
//                 className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl cursor-default transition-shadow"
//               >
//                 <div className="mb-4">{icon}</div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Goals;


import { useEffect, useState } from 'react';
import { FaPlus, FaTrash, FaCheck, FaTimes, FaBullseye, FaChartLine, FaLightbulb } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import axiosInstance from '../api/axiosInstance';  // <-- import axiosInstance
import { useAuth } from '../context/AuthContext'; // <-- import contexte auth

const conseils = [
  {
    icon: <FaBullseye className="text-indigo-400" size={30} />,
    title: "Clarté & Focus",
    text: "Définir des objectifs clairs permet de focaliser ton énergie et tes efforts sur ce qui compte vraiment.",
  },
  {
    icon: <FaChartLine className="text-pink-400" size={30} />,
    title: "Mesure & Suivi",
    text: "Un journal et des objectifs précis facilitent le suivi des progrès et l’identification des axes d’amélioration.",
  },
  {
    icon: <FaLightbulb className="text-yellow-400" size={30} />,
    title: "Motivation & Discipline",
    text: "Des objectifs bien définis renforcent la motivation et aident à maintenir la discipline sur le long terme.",
  },
];

const conseilsExtra = [
  {
    icon: <FaCheck className="text-green-400" size={28} />,
    text: "Sois spécifique : un objectif vague n'aide pas à progresser.",
  },
  {
    icon: <FaCheck className="text-green-400" size={28} />,
    text: "Fixe des échéances réalistes pour garder le cap.",
  },
  {
    icon: <FaCheck className="text-green-400" size={28} />,
    text: "Révise régulièrement tes objectifs pour rester aligné.",
  },
];

const Goals = () => {
  const { token } = useAuth(); // <-- récupération token depuis contexte

  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    type: 'weekly',
    dueDate: '',
  });

  const fetchGoals = async () => {
    try {
      const res = await axiosInstance.get("/goals", {  // URL relative
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
    if (token) fetchGoals();
  }, [token]); // fetch only if token is present

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/goals", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Objectif ajouté 🎯');
      setForm({ title: '', description: '', type: 'weekly', dueDate: '' });
      setGoals([res.data, ...goals]);
    } catch (error) {
      toast.error("Erreur lors de l'ajout");
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axiosInstance.put(
        `/goals/${id}`,
        { completed: !completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGoals(goals.map((goal) => (goal._id === id ? res.data : goal)));
    } catch (error) {
      toast.error('Erreur lors de la mise à jour');
    }
  };

  const deleteGoal = async (id) => {
    try {
      await axiosInstance.delete(`/goals/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Objectif supprimé 🗑️');
      setGoals(goals.filter((goal) => goal._id !== id));
    } catch (error) {
      toast.error('Erreur lors de la suppression');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">

        <h1 className="text-5xl font-extrabold mb-8 text-center drop-shadow-md">
          🎯 Objectifs de Trading
        </h1>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md rounded-lg p-8 border border-gray-300 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700 border-b border-indigo-300 pb-3">
            Ajouter un nouvel objectif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={form.title}
              onChange={handleChange}
              required
              className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="weekly">Hebdomadaire</option>
              <option value="monthly">Mensuel</option>
            </select>
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="bg-white border border-gray-400 rounded-md px-4 py-2 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md px-6 py-3 rounded-lg hover:brightness-110 transition flex items-center justify-center gap-3 font-semibold"
          >
            <FaPlus /> Ajouter
          </button>
        </form>

        {/* Liste des objectifs */}
        <section className="max-w-4xl mx-auto space-y-4">
          {goals.length === 0 ? (
            <p className="text-center text-indigo-700 text-lg">Aucun objectif trouvé.</p>
          ) : (
            goals.map((goal) => (
              <motion.div
                key={goal._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-5 flex justify-between items-center hover:shadow-lg transition-shadow"
              >
                <div className="max-w-[80%]">
                  <h3
                    className={`text-xl font-semibold ${
                      goal.completed ? 'line-through text-gray-400' : 'text-gray-900'
                    }`}
                  >
                    {goal.title}
                  </h3>
                  <p className="text-gray-700 mt-1">{goal.description}</p>
                  <p className="text-sm text-gray-500 mt-1 select-none">
                    {goal.type === 'weekly' ? '🗓️ Hebdomadaire' : '📅 Mensuel'} — À faire avant :{' '}
                    {new Date(goal.dueDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleComplete(goal._id, goal.completed)}
                    className={`p-3 rounded-full shadow-sm transition transform hover:scale-110 ${
                      goal.completed
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-green-400 text-green-900'
                    }`}
                    title="Changer le statut"
                  >
                    {goal.completed ? <FaTimes size={18} /> : <FaCheck size={18} />}
                  </button>
                  <button
                    onClick={() => deleteGoal(goal._id)}
                    className="p-3 rounded-full bg-red-400 text-red-900 shadow-sm hover:scale-110 transition transform"
                    title="Supprimer"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </section>

        {/* NOUVELLE SECTION AVANT "Pourquoi définir..." */}
        <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-10 shadow-md space-y-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            Conseils pour bien définir tes objectifs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conseilsExtra.map(({ icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.5 }}
                className="flex flex-col items-center text-indigo-700 text-lg"
              >
                <div className="mb-3">{icon}</div>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section conseils principale */}
        <section className="max-w-4xl mx-auto bg-indigo-50 rounded-lg p-10 shadow-lg text-gray-900">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
            Pourquoi définir des objectifs dans le trading ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conseils.map(({ icon, title, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl cursor-default transition-shadow"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Goals;






