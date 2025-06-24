
// import { ArrowUpRight, ArrowDownLeft, Trash2 } from "lucide-react";

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

//   const resultColor = winOrLoss === "Win" ? "text-green-600" : "text-red-600";
//   const directionIcon =
//     direction === "Buy" ? (
//       <ArrowUpRight className="text-green-500 inline-block mr-1" />
//     ) : (
//       <ArrowDownLeft className="text-red-500 inline-block mr-1" />
//     );

//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200 hover:shadow-2xl transition-all duration-300">
//       <div className="flex justify-between items-center mb-2">
//         <h2 className="text-xl font-semibold text-gray-800">{pair}</h2>
//         <button
//           onClick={handleDelete}
//           className="text-red-500 hover:text-red-700 transition"
//           title="Supprimer ce trade"
//         >
//           <Trash2 />
//         </button>
//       </div>

//       <div className="text-sm text-gray-500 mb-2">
//         📅 {new Date(dateOpen).toLocaleDateString()} →{" "}
//         {new Date(dateClosed).toLocaleDateString()}
//       </div>

//       <div className="flex justify-between items-center mb-2">
//         <div className="text-gray-700">
//           {directionIcon}
//           <span className="font-medium">{direction}</span>
//         </div>
//         <div className={`text-lg font-bold ${resultColor}`}>{result} pips</div>
//       </div>

//       {strategy && (
//         <div className="text-sm text-indigo-600 font-semibold mb-2">
//           🔖 Stratégie : {strategy}
//         </div>
//       )}

//       {comment && <div className="text-gray-600 italic">📝 {comment}</div>}
//     </div>
//   );
// };

// export default TradeCard;


import { ArrowUpRight, ArrowDownLeft, Trash2, CalendarDays, Landmark } from "lucide-react";
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

  const handleDelete = async () => {
    const confirm = window.confirm("❗ Es-tu sûr de vouloir supprimer ce trade ?");
    if (confirm) {
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
    }
  };

  const isWin = winOrLoss === "Win";
  const resultColor = isWin ? "text-green-600" : "text-red-600";
  const directionIcon = direction === "Buy"
    ? <ArrowUpRight className="text-green-500 w-5 h-5 mr-1" />
    : <ArrowDownLeft className="text-red-500 w-5 h-5 mr-1" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{pair}</h2>
          <div className="text-sm text-gray-500 flex items-center mt-1">
            <CalendarDays className="w-4 h-4 mr-1" />
            {new Date(dateOpen).toLocaleDateString()} → {new Date(dateClosed).toLocaleDateString()}
          </div>
        </div>
        <button
          onClick={handleDelete}
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
        <div className={`text-lg font-bold ${resultColor}`}>
          {result} pips
        </div>
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

























