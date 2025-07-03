
import { useState, useMemo } from "react";
import TradeCard from "./TradeCard";

const TradeList = ({ trades, onDelete, token }) => {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("pair"); // pair, strategy, date

  const filteredTrades = useMemo(() => {
    return trades
      .sort((a, b) => new Date(b.dateOpen) - new Date(a.dateOpen)) // tri
      .filter((trade) => {
        const value = trade[filterBy]?.toLowerCase?.() || "";
        return value.includes(search.toLowerCase());
      })
      .slice(0, 5); // limite à 5
  }, [trades, search, filterBy]);

  return (
    <div className="space-y-4">
      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder={`Filtrer par ${filterBy}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="pair">Paire</option>
          <option value="strategy">Stratégie</option>
          <option value="dateOpen">Date</option>
        </select>
      </div>

      {/* Liste des 6 trades */}
      {filteredTrades.length === 0 ? (
        <p className="text-gray-500 text-center">Aucun trade trouvé.</p>
      ) : (
        filteredTrades.map((trade) => (
          <TradeCard
            key={trade._id}
            trade={trade}
            onDelete={onDelete}
            token={token}
          />
        ))
      )}
    </div>
  );
};

export default TradeList;


























