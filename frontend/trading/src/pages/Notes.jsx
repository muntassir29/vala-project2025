
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const Notes = () => {
//   const { token } = useAuth();
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState("");
//   const [period, setPeriod] = useState("");
//   const [editingNoteId, setEditingNoteId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchNotes = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/notes", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();
//       setNotes(data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Erreur lors de la récupération des notes:", err);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const method = editingNoteId ? "PUT" : "POST";
//     const url = editingNoteId
//       ? `http://localhost:3000/api/notes/${editingNoteId}`
//       : "http://localhost:3000/api/notes";

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ content, period }),
//       });

//       if (!res.ok) throw new Error("Erreur API");

//       setContent("");
//       setPeriod("");
//       setEditingNoteId(null);
//       fetchNotes();
//     } catch (err) {
//       console.error("Erreur lors de l’enregistrement de la note:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Confirmer la suppression ?")) return;

//     try {
//       const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!res.ok) throw new Error("Erreur suppression");
//       fetchNotes();
//     } catch (err) {
//       console.error("Erreur suppression note:", err);
//     }
//   };

//   const handleEdit = (note) => {
//     setEditingNoteId(note._id);
//     setContent(note.content);
//     setPeriod(note.period);
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-8 p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center"> 📝 Notes Globales</h1>

//       <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4 mb-8">
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Contenu de la note"
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <input
//           value={period}
//           onChange={(e) => setPeriod(e.target.value)}
//           placeholder="Période (ex: Semaine 23 ou Juin 2025)"
//           className="w-full p-3 border rounded-md"
//           required
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           {editingNoteId ? "Modifier la note" : "Ajouter une note"}
//         </button>
//       </form>

//       {loading ? (
//         <p className="text-center text-gray-500">Chargement...</p>
//       ) : notes.length === 0 ? (
//         <p className="text-center text-gray-500">Aucune note disponible.</p>
//       ) : (
//         <div className="space-y-4">
//           {notes.map((note) => (
//             <div key={note._id} className="bg-white rounded-xl shadow p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-500">{note.period}</span>
//                 <div className="space-x-2">
//                   <button
//                     onClick={() => handleEdit(note)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     Modifier
//                   </button>
//                   <button
//                     onClick={() => handleDelete(note._id)}
//                     className="text-red-600 hover:underline"
//                   >
//                     Supprimer
//                   </button>
//                 </div>
//               </div>
//               <p className="text-gray-800 whitespace-pre-line">{note.content}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notes;


import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaLightbulb, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const conseilsNotes = [
  {
    icon: <FaLightbulb className="text-indigo-500" size={28} />,
    title: "Consigne 1",
    text: "Prends l’habitude de noter tes réflexions pour mieux analyser tes résultats.",
  },
  {
    icon: <FaLightbulb className="text-pink-500" size={28} />,
    title: "Consigne 2",
    text: "Les notes claires aident à détecter les erreurs et à répéter ce qui fonctionne.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500" size={28} />,
    title: "Consigne 3",
    text: "Reviens régulièrement sur tes notes pour ajuster ta stratégie.",
  },
];

const Notes = () => {
  const { token } = useAuth();
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [period, setPeriod] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setNotes(data);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors de la récupération des notes:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingNoteId ? "PUT" : "POST";
    const url = editingNoteId
      ? `http://localhost:3000/api/notes/${editingNoteId}`
      : "http://localhost:3000/api/notes";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content, period }),
      });

      if (!res.ok) throw new Error("Erreur API");

      setContent("");
      setPeriod("");
      setEditingNoteId(null);
      fetchNotes();
    } catch (err) {
      console.error("Erreur lors de l’enregistrement de la note:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Confirmer la suppression ?")) return;

    try {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Erreur suppression");
      fetchNotes();
    } catch (err) {
      console.error("Erreur suppression note:", err);
    }
  };

  const handleEdit = (note) => {
    setEditingNoteId(note._id);
    setContent(note.content);
    setPeriod(note.period);
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-900 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700 drop-shadow-md">
        📝 Notes Globales
      </h1>

      {/* Section conseils */}
      <section className="mb-12 bg-indigo-50 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
          Pourquoi tenir un journal de notes ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conseilsNotes.map(({ icon, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl cursor-default transition-shadow"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-xl shadow-md p-6 mb-10 border border-gray-300"
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu de la note"
          className="w-full p-4 border border-gray-400 rounded-md mb-4 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={5}
          required
        />
        <input
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder="Période (ex: Semaine 23 ou Juin 2025)"
          className="w-full p-3 border border-gray-400 rounded-md mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md px-6 py-3 rounded-lg hover:brightness-110 transition flex items-center justify-center gap-3 font-semibold"
        >
          <FaPlus /> {editingNoteId ? "Modifier la note" : "Ajouter une note"}
        </button>
      </form>

      {/* Liste des notes */}
      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : notes.length === 0 ? (
        <p className="text-center text-indigo-700 text-lg">Aucune note disponible.</p>
      ) : (
        <div className="space-y-6">
          {notes.map((note) => (
            <motion.div
              key={note._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 border border-gray-300 rounded-xl shadow-md p-5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-indigo-700 font-semibold select-none">{note.period}</span>
                <div className="space-x-4">
                  <button
                    onClick={() => handleEdit(note)}
                    className="text-indigo-600 hover:text-indigo-900 font-semibold flex items-center gap-1"
                    title="Modifier"
                  >
                    <FaEdit /> Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-red-600 hover:text-red-900 font-semibold flex items-center gap-1"
                    title="Supprimer"
                  >
                    <FaTrash /> Supprimer
                  </button>
                </div>
              </div>
              <p className="text-gray-900 whitespace-pre-line">{note.content}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;

