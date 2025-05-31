
import TradeCard from "./TradeCard";

const TradeList = ({ trades }) => {
  return (
    <div className="mt-6">
      {trades.length === 0 ? (
        <p className="text-gray-500">Aucun trade enregistré.</p>
      ) : (
        trades.map((trade) => <TradeCard key={trade._id} trade={trade} />)
      )}
    </div>
  );
};

export default TradeList;














