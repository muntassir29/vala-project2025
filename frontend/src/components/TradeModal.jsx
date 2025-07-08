
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

