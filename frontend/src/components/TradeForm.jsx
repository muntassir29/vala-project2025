

// import { useState } from "react";
// import axiosInstance from "../api/axiosInstance"; // <-- Utilisation ici
// import { useAuth } from "../context/AuthContext";
// import tradingIllustration from "../assets/trading-illustration.webp";

// import {
//   CalendarDays,
//   TrendingUp,
//   TrendingDown,
//   MessageSquareText,
//   BookOpen,
//   DollarSign,
//   ArrowUpDown,
//   PlusCircle,
//   Landmark,
// } from "lucide-react";

// const TradeForm = ({ onTradeCreated }) => {
//   const [formData, setFormData] = useState({
//     pair: "",
//     dateOpen: "",
//     dateClosed: "",
//     direction: "Buy",
//     result: "",
//     winOrLoss: "Win",
//     strategy: "",
//     comment: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axiosInstance.post("/trades", formData); // plus besoin d'ajouter le token
//       setFormData({
//         pair: "",
//         dateOpen: "",
//         dateClosed: "",
//         direction: "Buy",
//         result: "",
//         winOrLoss: "Win",
//         strategy: "",
//         comment: "",
//       });
//       onTradeCreated(); // callback après ajout
//     } catch (err) {
//       console.error("Erreur lors de l'ajout du trade :", err);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row gap-8 items-start bg-white/10 p-8 rounded-2xl shadow-xl transition duration-300">
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 gap-4 w-full md:w-1/2"
//       >
//         {/* Paire */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <Landmark className="text-gray-600" size={20} />
//           <input
//             type="text"
//             name="pair"
//             placeholder="Paire (ex: EUR/USD)"
//             value={formData.pair}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none placeholder-gray-500"
//             required
//           />
//         </div>

//         {/* Date d'ouverture */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <CalendarDays className="text-gray-600" size={20} />
//           <input
//             type="date"
//             name="dateOpen"
//             value={formData.dateOpen}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none text-gray-800"
//             required
//           />
//         </div>

//         {/* Date de clôture */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <CalendarDays className="text-gray-600" size={20} />
//           <input
//             type="date"
//             name="dateClosed"
//             value={formData.dateClosed}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none text-gray-800"
//             required
//           />
//         </div>

//         {/* Direction */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <ArrowUpDown className="text-gray-600" size={20} />
//           <select
//             name="direction"
//             value={formData.direction}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none text-gray-800"
//           >
//             <option value="Buy">Buy</option>
//             <option value="Sell">Sell</option>
//             <option value="Breakeven">Breakeven</option>
//           </select>
//         </div>

//         {/* Résultat */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <DollarSign className="text-gray-600" size={20} />
//           <input
//             type="number"
//             name="result"
//             placeholder="Résultat en pips"
//             value={formData.result}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none placeholder-gray-500"
//             required
//           />
//         </div>

//         {/* Win or Loss */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           {formData.winOrLoss === "Win" ? (
//             <TrendingUp className="text-green-600" size={20} />
//           ) : (
//             <TrendingDown className="text-red-600" size={20} />
//           )}
//           <select
//             name="winOrLoss"
//             value={formData.winOrLoss}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none text-gray-800"
//           >
//             <option value="Win">Win</option>
//             <option value="Loss">Loss</option>
//           </select>
//         </div>

//         {/* Stratégie */}
//         <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <BookOpen className="text-gray-600" size={20} />
//           <input
//             type="text"
//             name="strategy"
//             placeholder="Stratégie (ex: Breakout)"
//             value={formData.strategy}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none placeholder-gray-500"
//             required
//           />
//         </div>

//         {/* Commentaire */}
//         <div className="flex items-start gap-2 bg-white/80 p-2 rounded-md shadow-sm">
//           <MessageSquareText className="text-gray-600 mt-1" size={20} />
//           <textarea
//             name="comment"
//             placeholder="Commentaire"
//             value={formData.comment}
//             onChange={handleChange}
//             className="w-full bg-transparent outline-none placeholder-gray-500"
//             rows={3}
//           ></textarea>
//         </div>

//         {/* Bouton */}
//         <button
//           type="submit"
//           className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-200 hover:scale-[1.02]"
//         >
//           <PlusCircle size={18} /> Ajouter le trade
//         </button>
//       </form>

//       {/* Illustration */}
//       <div className="hidden md:flex w-1/2 justify-center items-center">
//         <img
//           src={tradingIllustration}
//           alt="Illustration trading"
//           className="w-full h-auto rounded-xl shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default TradeForm;


import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { PlusCircle, ArrowUpDown, CalendarDays, DollarSign, TrendingUp, TrendingDown, BookOpen, MessageSquareText, Landmark } from "lucide-react";
import tradingIllustration from "../assets/trading-illustration.webp";

const TradeForm = ({ onTradeCreated }) => {
  const [formData, setFormData] = useState({
    pair: "",
    dateOpen: "",
    dateClosed: "",
    direction: "Buy",
    result: "",
    winOrLoss: "Win",
    strategy: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/trades", formData);
      setFormData({
        pair: "",
        dateOpen: "",
        dateClosed: "",
        direction: "Buy",
        result: "",
        winOrLoss: "Win",
        strategy: "",
        comment: "",
      });
      onTradeCreated();
    } catch (err) {
      console.error("Erreur lors de l'ajout du trade :", err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start bg-white/10 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl transition duration-300 w-full">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full lg:w-1/2">
        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <Landmark className="text-gray-600" size={20} />
          <input
            type="text"
            name="pair"
            placeholder="Paire (ex: EUR/USD)"
            value={formData.pair}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            required
          />
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <CalendarDays className="text-gray-600" size={20} />
          <input
            type="date"
            name="dateOpen"
            value={formData.dateOpen}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-gray-800"
            required
          />
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <CalendarDays className="text-gray-600" size={20} />
          <input
            type="date"
            name="dateClosed"
            value={formData.dateClosed}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-gray-800"
            required
          />
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <ArrowUpDown className="text-gray-600" size={20} />
          <select
            name="direction"
            value={formData.direction}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-gray-800"
          >
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
            <option value="Breakeven">Breakeven</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <DollarSign className="text-gray-600" size={20} />
          <input
            type="number"
            name="result"
            placeholder="Résultat en pips"
            value={formData.result}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            required
          />
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          {formData.winOrLoss === "Win" ? (
            <TrendingUp className="text-green-600" size={20} />
          ) : (
            <TrendingDown className="text-red-600" size={20} />
          )}
          <select
            name="winOrLoss"
            value={formData.winOrLoss}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-gray-800"
          >
            <option value="Win">Win</option>
            <option value="Loss">Loss</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <BookOpen className="text-gray-600" size={20} />
          <input
            type="text"
            name="strategy"
            placeholder="Stratégie (ex: Breakout)"
            value={formData.strategy}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            required
          />
        </div>

        <div className="flex items-start gap-2 bg-white/80 p-2 rounded-md shadow-sm">
          <MessageSquareText className="text-gray-600 mt-1" size={20} />
          <textarea
            name="comment"
            placeholder="Commentaire"
            value={formData.comment}
            onChange={handleChange}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            rows={3}
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white py-2 px-4 rounded-md font-semibold shadow-md transition duration-200 hover:scale-[1.02]"
        >
          <PlusCircle size={18} /> Ajouter le trade
        </button>
      </form>

      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
        <img
          src={tradingIllustration}
          alt="Illustration trading"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default TradeForm;



























