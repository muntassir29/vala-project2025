// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth(); // fonction pour stocker token + user
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Email ou mot de passe incorrect");
//         return;
//       }

//       // Stocker token + user dans contexte
//       login(data.token, data.user); // à adapter selon ce que tu renvoies du backend

//       // Redirection vers dashboard
//       navigate("/dashboard");
//     } catch (err) {
//       setError("Erreur serveur, veuillez réessayer plus tard.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded">
//       <h2 className="text-2xl font-bold mb-4">Connexion</h2>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <input
//         type="password"
//         placeholder="Mot de passe"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="w-full p-2 mb-4 border rounded"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         Se connecter
//       </button>

//       <p className="mt-4 text-center">
//             Pas encore de compte ?{' '}
//          <Link to="/signup" className="text-blue-600 hover:underline">
//          Inscrivez-vous
//         </Link>
//       </p>
      
//     </form>
//   );
// }


import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Email ou mot de passe incorrect");
        return;
      }

      login(data.token, data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Erreur serveur, veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
      >
        <div className="flex items-center gap-2 mb-6">
          <LogIn className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Connexion</h2>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Se connecter
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Inscrivez-vous
          </Link>
        </p>
      </form>
    </div>
  );
}



