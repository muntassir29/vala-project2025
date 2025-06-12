// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

// const Notes = () => {
//   const { token } = useAuth();
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState('');
//   const [period, setPeriod] = useState('');
//   const [editingNoteId, setEditingNoteId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchNotes = async () => {
//     try {
//       const res = await fetch('http://localhost:3000/api/notes', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();
//       setNotes(data);
//       setLoading(false);
//     } catch (err) {
//       console.error('Erreur lors de la récupération des notes:', err);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const method = editingNoteId ? 'PUT' : 'POST';
//     const url = editingNoteId
//       ? `http://localhost:3000/api/notes/${editingNoteId}`
//       : 'http://localhost:3000/api/notes';

//     try {
//       const res = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ content, period }),
//       });

//       if (!res.ok) throw new Error('Erreur API');

//       setContent('');
//       setPeriod('');
//       setEditingNoteId(null);
//       fetchNotes();
//     } catch (err) {
//       console.error('Erreur lors de l’enregistrement de la note:', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Confirmer la suppression ?')) return;

//     try {
//       const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!res.ok) throw new Error('Erreur suppression');
//       fetchNotes();
//     } catch (err) {
//       console.error('Erreur suppression note:', err);
//     }
//   };

//   const handleEdit = (note) => {
//     setEditingNoteId(note._id);
//     setContent(note.content);
//     setPeriod(note.period);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">📝 Notes Globales</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded-lg p-4 mb-8 space-y-4"
//       >
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Période</label>
//           <input
//             type="text"
//             value={period}
//             onChange={(e) => setPeriod(e.target.value)}
//             placeholder="Ex: Mai 2025, Semaine 23..."
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Contenu</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Ce que tu as appris cette semaine..."
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             rows={4}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           <FaPlus />
//           {editingNoteId ? 'Modifier la note' : 'Ajouter une note'}
//         </button>
//       </form>

//       {loading ? (
//         <p className="text-center text-gray-500">Chargement des notes...</p>
//       ) : notes.length === 0 ? (
//         <p className="text-center text-gray-500">Aucune note pour le moment.</p>
//       ) : (
//         <div className="space-y-4">
//           {notes.map((note) => (
//             <div
//               key={note._id}
//               className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow flex justify-between items-start"
//             >
//               <div>
//                 <h3 className="font-semibold text-lg text-blue-600">{note.period}</h3>
//                 <p className="text-gray-700 whitespace-pre-line">{note.content}</p>
//                 <p className="text-sm text-gray-400 mt-1">
//                   Créée le {new Date(note.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(note)}
//                   className="text-yellow-500 hover:text-yellow-600"
//                 >
//                   <FaEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(note._id)}
//                   className="text-red-500 hover:text-red-600"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setNotes(data);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors de la récupération des notes:", err);
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
    <div className="max-w-3xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center"> 📝 Notes Globales</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4 mb-8">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu de la note"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          placeholder="Période (ex: Semaine 23 ou Juin 2025)"
          className="w-full p-3 border rounded-md"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editingNoteId ? "Modifier la note" : "Ajouter une note"}
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-500">Chargement...</p>
      ) : notes.length === 0 ? (
        <p className="text-center text-gray-500">Aucune note disponible.</p>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note._id} className="bg-white rounded-xl shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{note.period}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(note)}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <p className="text-gray-800 whitespace-pre-line">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
