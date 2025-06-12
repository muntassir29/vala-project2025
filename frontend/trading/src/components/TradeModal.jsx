// import { Dialog } from "@headlessui/react";
// import { X } from "lucide-react";

// const TradeModal = ({ isOpen, onClose, trade }) => {
//   if (!isOpen || !trade) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
//           onClick={onClose}
//         >
//           <X size={20} />
//         </button>

//         <h2 className="text-xl font-bold mb-4 text-gray-800">📊 Détail du Trade</h2>
//         <div className="space-y-2 text-gray-700">
//           <p><strong>Pair :</strong> {trade.pair}</p>
//           <p><strong>Date :</strong> {new Date(trade.dateOpen).toLocaleDateString()}</p>
//           <p><strong>Résultat :</strong> {trade.result} pips</p>
//           <p><strong>Win/Loss :</strong> {trade.winOrLoss}</p>
//           <p><strong>Stratégie :</strong> {trade.strategy || "N/A"}</p>
//           <p><strong>Commentaire :</strong> {trade.comment || "—"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradeModal;


// src/components/TradeModal.jsx
import { X } from "lucide-react";
import moment from "moment";

const TradeModal = ({ event, onClose }) => {
  const { pair, winOrLoss, result, strategy, dateOpen } = event.resource;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          📊 Détails du Trade
        </h2>

        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Paire :</span> {pair}</p>
          <p><span className="font-semibold">Résultat :</span> {result} pips</p>
          <p><span className="font-semibold">Gagné ou Perdu :</span> {winOrLoss}</p>
          <p><span className="font-semibold">Stratégie :</span> {strategy || "Non spécifiée"}</p>
          <p><span className="font-semibold">Date :</span> {moment(dateOpen).format("DD/MM/YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default TradeModal;

