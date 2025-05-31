
import { useEffect, useState } from "react";
import TradeForm from "../components/TradeForm";
import TradeList from "../components/TradeList";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const { token } = useAuth();
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrades = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/trades", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrades(res.data);
    } catch (err) {
      console.error("Erreur récupération trades :", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🎯 Dashboard - Mes Trades
      </h1>
      <TradeForm onTradeCreated={fetchTrades} />
      {loading ? (
        <p className="text-gray-600">Chargement des trades...</p>
      ) : (
        <TradeList trades={trades} />
      )}
    </div>
  );
};

export default Dashboard;










