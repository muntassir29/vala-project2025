
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const TradeCard = ({ trade }) => {
  const {
    pair,
    dateOpen,
    dateClosed,
    direction,
    result,
    winOrLoss,
    comment,
    strategy,
  } = trade;

  const resultColor = winOrLoss === "Win" ? "text-green-600" : "text-red-600";
  const directionIcon =
    direction === "Buy" ? (
      <ArrowUpRight className="text-green-500 inline-block mr-1" />
    ) : (
      <ArrowDownLeft className="text-red-500 inline-block mr-1" />
    );

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200 hover:shadow-xl transition-all">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{pair}</h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            winOrLoss === "Win"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {winOrLoss}
        </span>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        📅 {new Date(dateOpen).toLocaleDateString()} →{" "}
        {new Date(dateClosed).toLocaleDateString()}
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-700">
          {directionIcon}
          <span className="font-medium">{direction}</span>
        </div>
        <div className={`text-lg font-bold ${resultColor}`}>
          {result} pips
        </div>
      </div>

      {strategy && (
        <div className="text-sm text-indigo-600 font-semibold mb-2">
          🔖 Stratégie : {strategy}
        </div>
      )}

      {comment && (
        <div className="text-gray-600 italic">📝 {comment}</div>
      )}
    </div>
  );
};

export default TradeCard;























