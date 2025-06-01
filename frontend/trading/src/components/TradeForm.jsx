
// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { PlusCircle } from "lucide-react";

// const TradeForm = ({ onTradeCreated }) => {
//   const { token } = useAuth();

//   const [formData, setFormData] = useState({
//     pair: "",
//     dateOpen: "",
//     dateClosed: "",
//     direction: "Buy",
//     result: "",
//     winOrLoss: "Win",
//     comment: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/api/trades", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setFormData({
//         pair: "",
//         dateOpen: "",
//         dateClosed: "",
//         direction: "Buy",
//         result: "",
//         winOrLoss: "Win",
//         comment: "",
//       });
//       onTradeCreated();
//     } catch (err) {
//       console.error("Erreur lors de l'ajout du trade :", err);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
//     >
//       <input
//         type="text"
//         name="pair"
//         placeholder="Paire (ex: EUR/USD)"
//         value={formData.pair}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       <input
//         type="date"
//         name="dateOpen"
//         value={formData.dateOpen}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       <input
//         type="date"
//         name="dateClosed"
//         value={formData.dateClosed}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       <select
//         name="direction"
//         value={formData.direction}
//         onChange={handleChange}
//         className="input"
//       >
//         <option value="Buy">Buy</option>
//         <option value="Sell">Sell</option>
//         <option value="Breakeven">Breakeven</option>
//       </select>
//       <input
//         type="number"
//         name="result"
//         placeholder="Résultat en pips"
//         value={formData.result}
//         onChange={handleChange}
//         className="input"
//         required
//       />
//       <select
//         name="winOrLoss"
//         value={formData.winOrLoss}
//         onChange={handleChange}
//         className="input"
//       >
//         <option value="Win">Win</option>
//         <option value="Loss">Loss</option>
//       </select>
//       <textarea
//         name="comment"
//         placeholder="Commentaire"
//         value={formData.comment}
//         onChange={handleChange}
//         className="input md:col-span-2"
//       ></textarea>
//       <button
//         type="submit"
//         className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition md:col-span-2 justify-center"
//       >
//         <PlusCircle size={18} /> Ajouter le trade
//       </button>
//     </form>
//   );
// };

// export default TradeForm;

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { PlusCircle } from "lucide-react";

const TradeForm = ({ onTradeCreated }) => {
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    pair: "",
    dateOpen: "",
    dateClosed: "",
    direction: "Buy",
    result: "",
    winOrLoss: "Win",
    strategy: "", // ← ajouté ici
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/trades", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({
        pair: "",
        dateOpen: "",
        dateClosed: "",
        direction: "Buy",
        result: "",
        winOrLoss: "Win",
        strategy: "", // ← reset ici aussi
        comment: "",
      });
      onTradeCreated();
    } catch (err) {
      console.error("Erreur lors de l'ajout du trade :", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
    >
      <input
        type="text"
        name="pair"
        placeholder="Paire (ex: EUR/USD)"
        value={formData.pair}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="date"
        name="dateOpen"
        value={formData.dateOpen}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="date"
        name="dateClosed"
        value={formData.dateClosed}
        onChange={handleChange}
        className="input"
        required
      />
      <select
        name="direction"
        value={formData.direction}
        onChange={handleChange}
        className="input"
      >
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
        <option value="Breakeven">Breakeven</option>
      </select>
      <input
        type="number"
        name="result"
        placeholder="Résultat en pips"
        value={formData.result}
        onChange={handleChange}
        className="input"
        required
      />
      <select
        name="winOrLoss"
        value={formData.winOrLoss}
        onChange={handleChange}
        className="input"
      >
        <option value="Win">Win</option>
        <option value="Loss">Loss</option>
      </select>

      {/* Nouveau champ stratégie */}
      <input
        type="text"
        name="strategy"
        placeholder="Stratégie (ex: Breakout, Pullback)"
        value={formData.strategy}
        onChange={handleChange}
        className="input"
        required
      />

      <textarea
        name="comment"
        placeholder="Commentaire"
        value={formData.comment}
        onChange={handleChange}
        className="input md:col-span-2"
      ></textarea>
      <button
        type="submit"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition md:col-span-2 justify-center"
      >
        <PlusCircle size={18} /> Ajouter le trade
      </button>
    </form>
  );
};

export default TradeForm;















