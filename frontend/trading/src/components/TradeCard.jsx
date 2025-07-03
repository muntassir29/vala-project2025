
// import { ArrowUpRight, ArrowDownLeft, Trash2, CalendarDays, Landmark } from "lucide-react";
// import { motion } from "framer-motion";

// const TradeCard = ({ trade, onDelete, token }) => {
//   const {
//     _id,
//     pair,
//     dateOpen,
//     dateClosed,
//     direction,
//     result,
//     winOrLoss,
//     comment,
//     strategy,
//   } = trade;

//   const handleDelete = async () => {
//     const confirm = window.confirm("❗ Es-tu sûr de vouloir supprimer ce trade ?");
//     if (confirm) {
//       try {
//         await fetch(`http://localhost:3000/api/trades/${_id}`, {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         onDelete();
//       } catch (err) {
//         console.error("Erreur lors de la suppression :", err);
//       }
//     }
//   };

//   const isWin = winOrLoss === "Win";
//   const resultColor = isWin ? "text-green-600" : "text-red-600";
//   const directionIcon = direction === "Buy"
//     ? <ArrowUpRight className="text-green-500 w-5 h-5 mr-1" />
//     : <ArrowDownLeft className="text-red-500 w-5 h-5 mr-1" />;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">{pair}</h2>
//           <div className="text-sm text-gray-500 flex items-center mt-1">
//             <CalendarDays className="w-4 h-4 mr-1" />
//             {new Date(dateOpen).toLocaleDateString()} → {new Date(dateClosed).toLocaleDateString()}
//           </div>
//         </div>
//         <button
//           onClick={handleDelete}
//           className="text-red-500 hover:text-red-700 transition"
//           title="Supprimer ce trade"
//         >
//           <Trash2 className="w-5 h-5" />
//         </button>
//       </div>

//       <div className="flex justify-between items-center mb-3">
//         <div className="flex items-center text-gray-700 text-sm">
//           {directionIcon}
//           <span className="font-medium">{direction}</span>
//         </div>
//         <div className={`text-lg font-bold ${resultColor}`}>
//           {result} pips
//         </div>
//       </div>

//       {strategy && (
//         <div className="text-sm text-indigo-600 font-medium mb-2 flex items-center">
//           <Landmark className="w-4 h-4 mr-1" />
//           Stratégie : {strategy}
//         </div>
//       )}

//       {comment && (
//         <div className="text-gray-600 italic text-sm">📝 {comment}</div>
//       )}
//     </motion.div>
//   );
// };

// export default TradeCard;


import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Trash2,
  CalendarDays,
  Landmark,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

const TradeCard = ({ trade, onDelete, token }) => {
  const {
    _id,
    pair,
    dateOpen,
    dateClosed,
    direction,
    result,
    winOrLoss,
    comment,
    strategy,
  } = trade;

  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/trades/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDelete();
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  const isWin = winOrLoss === "Win";
  const resultColor = isWin ? "text-green-600" : "text-red-600";
  const directionIcon =
    direction === "Buy" ? (
      <ArrowUpRight className="text-green-500 w-5 h-5 mr-1" />
    ) : (
      <ArrowDownLeft className="text-red-500 w-5 h-5 mr-1" />
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5 relative"
    >
      {/* Confirmation de suppression */}
      {showConfirm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-white/90 backdrop-blur-md z-10 rounded-2xl flex flex-col justify-center items-center text-center p-6"
        >
          <AlertTriangle className="text-red-500 w-8 h-8 mb-2" />
          <p className="text-red-700 font-semibold mb-4">
            Es-tu sûr de vouloir supprimer ce trade ?
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowConfirm(false)}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Annuler
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Supprimer
            </button>
          </div>
        </motion.div>
      )}

      {/* Contenu principal */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{pair}</h2>
          <div className="text-sm text-gray-500 flex items-center mt-1">
            <CalendarDays className="w-4 h-4 mr-1" />
            {new Date(dateOpen).toLocaleDateString()} →{" "}
            {new Date(dateClosed).toLocaleDateString()}
          </div>
        </div>
        <button
          onClick={() => setShowConfirm(true)}
          className="text-red-500 hover:text-red-700 transition"
          title="Supprimer ce trade"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center text-gray-700 text-sm">
          {directionIcon}
          <span className="font-medium">{direction}</span>
        </div>
        <div className={`text-lg font-bold ${resultColor}`}>{result} pips</div>
      </div>

      {strategy && (
        <div className="text-sm text-indigo-600 font-medium mb-2 flex items-center">
          <Landmark className="w-4 h-4 mr-1" />
          Stratégie : {strategy}
        </div>
      )}

      {comment && (
        <div className="text-gray-600 italic text-sm">📝 {comment}</div>
      )}
    </motion.div>
  );
};

export default TradeCard;


























