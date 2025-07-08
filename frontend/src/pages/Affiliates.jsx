
import { FaUserPlus, FaBullhorn, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import affiliateBanner from "../assets/affiliate-banner.jpg";
import heroSideImage from "../assets/affiliate-side.webp";

export default function Affiliates() {
  return (
    <div className="w-full text-gray-800">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 Rejoignez notre programme d'affiliation
          </h1>
          <p className="text-lg text-gray-700">
            Faites la promotion de notre journal de trading puissant et gagnez des commissions à vie.
          </p>
        </motion.div>

        <motion.img
          src={heroSideImage}
          alt="Illustration affilié"
          className="w-full max-w-md h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      <motion.img
        src={affiliateBanner}
        alt="Bannière affiliation"
        className="w-full h-[350px] object-cover object-bottom-right mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaUserPlus size={32} className="text-blue-600" />,
              title: "S'inscrire",
              desc: "Soyez approuvé rapidement et recevez votre lien de parrainage unique."
            },
            {
              icon: <FaBullhorn size={32} className="text-green-600" />,
              title: "Promouvoir",
              desc: "Partagez votre lien dans les communautés de trading et sur vos plateformes de contenu."
            },
            {
              icon: <FaMoneyBillWave size={32} className="text-yellow-600" />,
              title: "Gagner",
              desc: "Recevez 20% de commission récurrente pour chaque utilisateur payant."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-6 border"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{`${i + 1}. ${step.title}`}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Pourquoi nous rejoindre ?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> 20% de commission récurrente à vie</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Cookie de suivi de 30 jours</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Plans Silver et Gold à forte conversion</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Tableau de bord pour suivre les clics, conversions et gains</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Validation rapide et support réactif</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">💸 Potentiel de commission</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Plan Silver</h3>
              <p>💰 Prix : 29$/mois</p>
              <p>💸 Vous gagnez : 5,80$/mois</p>
              <p>📅 Gains annuels : 69,60$</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Plan Gold</h3>
              <p>💰 Prix : 49$/mois</p>
              <p>💸 Vous gagnez : 9,80$/mois</p>
              <p>📅 Gains annuels : 117,60$</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Commencez dès aujourd’hui</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Soumettez votre demande et commencez à promouvoir en quelques minutes. Suivez votre trafic et vos gains grâce à notre tableau de bord en temps réel.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Nous contacter pour postuler
            </a>
            <a
              href="/signup"
              className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Créer un compte gratuitement
            </a>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
