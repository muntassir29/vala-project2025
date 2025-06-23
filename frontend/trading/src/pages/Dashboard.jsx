
import { useEffect, useState } from "react";
import TradeForm from "../components/TradeForm";
import TradeList from "../components/TradeList";
import CalendarView from "../components/CalendarView";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { Loader2 } from "lucide-react"; // Icône de chargement

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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-black mb-8">📊 Mon Dashboard</h1>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8">
        <TradeForm onTradeCreated={fetchTrades} />
      </div>

      <div className="bg-white/5 p-6 rounded-2xl shadow-inner">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-white">
            <Loader2 className="h-10 w-10 animate-spin mb-4 text-sky-400" />
            <p className="text-lg">Chargement des trades...</p>
          </div>
        ) : (
          <>
            <TradeList trades={trades} />
            <div className="mt-8">
              <CalendarView trades={trades} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;




































