
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import authImage from "../assets/auth.png";
import axiosInstance from "../api/axiosInstance";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await axiosInstance.post("/auth/register", {
        fullname,
        email,
        password,
      });

      setMessage("Inscription réussie ! Redirection...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Erreur serveur, veuillez réessayer plus tard.");
      }
    }
  };


  return (
    <div className="flex min-h-screen">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="flex items-center gap-2 mb-6">
            <UserPlus className="text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Inscription</h2>
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}
          {message && <p className="text-green-600 mb-4">{message}</p>}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            S'inscrire
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={authImage}
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}



