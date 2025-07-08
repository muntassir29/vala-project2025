import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import journalStep1 from "../assets/journal-step1.webp";
import journalStep2 from "../assets/journal-step2.png";
import journalStep3 from "../assets/journal-step3.jpg";
import dashboardImage from "../assets/journal-dashboard.png";
import tradingEdgeImg from "../assets/trading-edge.png";
import tradeHeader from "../assets/tradeheader.png";
import sectionImage from "../assets/sectionimage.jpg";

const faqs = [
  {
    question: "Mes données de trading sont-elles sécurisées ?",
    answer:
      "Vos données sont cryptées et stockées en toute sécurité dans le cloud avec des sauvegardes régulières. Vous seul y avez accès.",
  },
  {
    question: "Puis-je importer mes trades depuis mon broker ?",
    answer:
      "Oui ! Vous pouvez importer votre historique de trades depuis des plateformes comme MetaTrader, TradingView, et plus encore en quelques clics.",
  },
  {
    question: "Quel type d’analyses vais-je obtenir ?",
    answer:
      "Vous recevrez des rapports détaillés, des analyses de modèles, des statistiques par stratégie et bien plus pour améliorer vos performances.",
  },
  {
    question: "Y a-t-il une période d’essai gratuite ?",
    answer:
      "Bien sûr. Essayez toutes les fonctionnalités gratuitement, puis décidez si vous souhaitez passer au plan Silver ou Gold.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Section Hero */}
      <header
        className="relative text-white px-8 py-32 flex flex-col items-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${tradeHeader})` }}
      >
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-5xl font-bold mb-4 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Bienvenue sur Trading Journal
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg mb-6 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Monétisez votre audience en promouvant notre journal de trading et nos outils d’analyse puissants.
          </motion.p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="relative inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#352a1e] via-[#2f3f4c] to-[#100e0b] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
              <span className="relative z-10">Créer un compte</span>
            </Link>
            <Link
              to="/affiliates"
              className="relative inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
              <span className="relative z-10">Affiliation</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow px-8 py-16 space-y-20 max-w-6xl mx-auto">
        {/* Étapes simples */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">3 étapes simples pour booster vos performances</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[journalStep1, journalStep2, journalStep3].map((img, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl border shadow-md hover:shadow-lg transition-transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <motion.img
                  src={img}
                  alt={`Étape ${idx + 1}`}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 + 0.1, duration: 0.6 }}
                />
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                >
                  {idx === 0
                    ? "Étape 1 : Journalisez vos trades"
                    : idx === 1
                    ? "Étape 2 : Identifiez vos schémas"
                    : "Étape 3 : Améliorez vos performances"}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.5, duration: 0.6 }}
                >
                  {idx === 0
                    ? "Enregistrez vos trades en quelques secondes. Vos données sont sauvegardées et sécurisées."
                    : idx === 1
                    ? "Laissez notre logiciel détecter vos modèles pour mieux comprendre ce qui fonctionne."
                    : "Analysez vos erreurs, identifiez vos faiblesses et progressez chaque jour."}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pourquoi choisir Trading Journal */}
        <section>
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Pourquoi choisir Trading Journal ?
          </motion.h2>
          <motion.ul
            className="list-disc list-inside space-y-2 text-gray-700 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <li>Documentez vos habitudes passées et apprenez grâce à notre système de notes intelligent.</li>
            <li>Commissions récurrentes : gagnez 20% sur chaque abonnement actif.</li>
            <li>Cookie de 30 jours : gagnez même si l'inscription se fait plus tard.</li>
            <li>Une marque de confiance utilisée par des milliers de traders.</li>
            <li>Plans Silver & Gold pour s’adapter à tous les profils.</li>
          </motion.ul>
        </section>

        {/* Journal de Trading */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold">Journal de trading</h2>
            <p className="text-gray-700">
              Enregistrez vos trades avec précision et laissez notre outil puissant vous guider pour corriger vos erreurs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Journalisez :</strong> Créez un historique complet et accessible depuis n’importe où.</li>
              <li><strong>Réduisez vos pertes :</strong> Apprenez ce qui fonctionne ou pas et concentrez-vous sur les bonnes stratégies.</li>
              <li><strong>Gagnez du temps :</strong> Importez votre historique de trading depuis votre plateforme.</li>
              <li><strong>Personnalisez :</strong> Adaptez le journal à votre style de trading.</li>
            </ul>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={dashboardImage}
              alt="Dashboard du journal de trading"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </section>

        {/* Avantage trading */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={tradingEdgeImg}
              alt="Rapports de performance"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold">Trouvez votre avantage de trading</h2>
            <p className="text-gray-700">
              Remplacez les tableurs complexes par des rapports simples et puissants pour comprendre vos comportements de trading.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Affinez votre edge :</strong> Nos rapports vous offrent des retours immédiats pour vous améliorer.</li>
              <li><strong>Comprenez vos chiffres :</strong> Nos analyses sont présentées en langage clair.</li>
              <li><strong>Personnalisez votre analyse :</strong> Visualisez vos forces et vos faiblesses pour progresser efficacement.</li>
            </ul>
          </motion.div>
        </section>
      </main>

      {/* Call to Action final */}
      <section
        className="relative text-white px-8 py-15 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${sectionImage})` }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            className="mb-4 text-lg text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Simple. Rapide. Puissant.
          </motion.p>
          <motion.p
            className="text-xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Le journal de trading qui vous aidera à améliorer vos performances.
          </motion.p>
          <Link
            to="/signup"
            className="relative inline-block px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
            <span className="relative z-10">Créer un compte maintenant</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mt-24 mb-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="text-xl text-gray-400 transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}




