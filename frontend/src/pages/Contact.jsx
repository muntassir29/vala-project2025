
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function ContactTest() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rl2tjta",
        "template_r83gwhg",
        e.target,
        "ksUcNdwuTHwxYojvs"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <motion.form
        onSubmit={sendEmail}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-xl p-8 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Contactez-nous
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>

        <button
          type="submit"
          className="relative w-full flex items-center justify-center gap-2 py-3 text-white font-semibold rounded-full
          bg-gradient-to-r from-pink-500 to-sky-500 shadow-lg transform transition-all duration-300
          hover:scale-105 hover:shadow-xl hover:text-black
          before:absolute before:inset-0 before:rounded-full
          before:bg-gradient-to-r before:from-pink-400 before:to-sky-400 before:opacity-0 
          hover:before:opacity-30 before:transition before:duration-300"
        >
          <FiSend className="text-xl" />
          Envoyer le message
        </button>

        {status === "success" && (
          <motion.div
            className="flex items-center gap-2 text-green-600 bg-green-100 p-3 mt-4 rounded-md border border-green-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaCheckCircle className="text-lg" />
            Message envoyé avec succès !
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            className="flex items-center gap-2 text-red-600 bg-red-100 p-3 mt-4 rounded-md border border-red-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaExclamationCircle className="text-lg" />
            Une erreur est survenue, veuillez réessayer.
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}

