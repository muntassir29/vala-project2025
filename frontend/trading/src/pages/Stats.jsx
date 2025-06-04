
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
// import { FiTrendingUp, FiTrendingDown, FiPieChart } from "react-icons/fi";

// const COLORS = ["#4ade80", "#f87171", "#60a5fa"]; // vert, rouge, bleu

// const Stats = () => {
//   const { token } = useAuth();
//   const [strategyStats, setStrategyStats] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchStats = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/trades/strategies/stats", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStrategyStats(res.data);
//     } catch (error) {
//       console.error("Erreur récupération statistiques :", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   // Préparer données pour graphique
//   const barData = strategyStats.map((s) => ({
//     strategy: s.strategy,
//     wins: s.wins,
//     losses: s.losses,
//   }));

//   const pieData = strategyStats.map((s) => ({
//     name: s.strategy,
//     value: s.total,
//   }));

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
//         <FiPieChart className="text-indigo-600" size={36} />
//         Statistiques par Stratégie
//       </h1>

//       {loading ? (
//         <p className="text-gray-600 text-lg">Chargement des statistiques...</p>
//       ) : (
//         <>
//           {/* Tableau détaillé */}
//           <div className="overflow-x-auto mb-12 shadow-lg rounded-lg border border-gray-200">
//             <table className="w-full table-auto border-collapse text-sm">
//               <thead className="bg-indigo-50">
//                 <tr>
//                   <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-indigo-700">Stratégie</th>
//                   <th className="border border-gray-300 px-6 py-3 text-center font-semibold text-indigo-700">Trades</th>
//                   <th className="border border-gray-300 px-6 py-3 text-center font-semibold text-indigo-700 flex items-center justify-center gap-1">
//                     <FiTrendingUp className="text-green-500" />
//                     Win
//                   </th>
//                   <th className="border border-gray-300 px-6 py-3 text-center font-semibold text-indigo-700 flex items-center justify-center gap-1">
//                     <FiTrendingDown className="text-red-500" />
//                     Loss
//                   </th>
//                   <th className="border border-gray-300 px-6 py-3 text-center font-semibold text-indigo-700">Win Rate</th>
//                   <th className="border border-gray-300 px-6 py-3 text-center font-semibold text-indigo-700">Profit Factor</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {strategyStats.map((s, index) => (
//                   <tr
//                     key={index}
//                     className={`text-center ${
//                       index % 2 === 0 ? "bg-white" : "bg-indigo-50"
//                     } hover:bg-indigo-100 transition-colors`}
//                   >
//                     <td className="border border-gray-300 px-6 py-3 text-left font-medium text-gray-800">{s.strategy}</td>
//                     <td className="border border-gray-300 px-6 py-3">{s.total}</td>
//                     <td className="border border-gray-300 px-6 py-3 text-green-600 font-semibold">{s.wins}</td>
//                     <td className="border border-gray-300 px-6 py-3 text-red-600 font-semibold">{s.losses}</td>
//                     <td className="border border-gray-300 px-6 py-3">{s.winRate}</td>
//                     <td className="border border-gray-300 px-6 py-3">{s.profitFactor}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Graphiques */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {/* Bar Chart Win vs Loss */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
//                 <FiTrendingUp className="text-green-500" />
//                 <FiTrendingDown className="text-red-500" />
//                 Trades Gagnants vs Perdants
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                   <XAxis dataKey="strategy" stroke="#4B5563" />
//                   <YAxis stroke="#4B5563" />
//                   <Tooltip />
//                   <Bar dataKey="wins" fill="#22c55e" />
//                   <Bar dataKey="losses" fill="#ef4444" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Pie Chart Total Trades */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
//                 <FiPieChart className="text-indigo-600" />
//                 Répartition des Trades par Stratégie
//               </h2>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={100}
//                     fill="#8884d8"
//                     label={(entry) => `${entry.name} (${entry.value})`}
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Legend />
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Stats;


import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiPieChart,
  FiBarChart2,
  FiActivity,
} from "react-icons/fi";

const STRATEGY_COLORS = ["#7c3aed", "#ec4899", "#0ea5e9"]; // violet, rose, bleu

const Stats = () => {
  const { token } = useAuth();
  const [strategyStats, setStrategyStats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
    fetchMonthlyStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/trades/strategies/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStrategyStats(res.data);
    } catch (err) {
      console.error("Erreur stats stratégie:", err);
      setError("Erreur récupération statistiques par stratégie.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMonthlyStats = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/trades/stats/monthly", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMonthlyStats(res.data);
    } catch (err) {
      console.error("Erreur évolution mensuelle:", err);
      setError("Erreur récupération évolution mensuelle.");
    }
  };

  const barData = strategyStats.map((s) => ({
    strategy: s.strategy,
    wins: s.wins,
    losses: s.losses,
  }));

  const pieData = strategyStats.map((s) => ({
    name: s.strategy,
    value: s.total,
  }));

  const lineData = monthlyStats.map((m) => ({
    month: m.month,
    profit: m.totalProfit,
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
        <FiPieChart className="text-indigo-600" size={36} />
        Statistiques de Trading
      </h1>

      {loading ? (
        <p className="text-gray-600 text-lg">Chargement des statistiques...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <>
          {/* ==== TABLEAU STRATEGIES ==== */}
          <div className="overflow-x-auto mb-12 shadow-lg rounded-lg border border-gray-200 bg-white">
            <table className="w-full table-auto border-collapse text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-indigo-700">Stratégie</th>
                  <th className="px-6 py-3 text-center font-semibold text-indigo-700">Trades</th>
                  <th className="px-6 py-3 text-center font-semibold text-indigo-700 flex items-center justify-center gap-1">
                    <FiTrendingUp className="text-pink-500" />
                    Win
                  </th>
                  <th className="px-6 py-3 text-center font-semibold text-indigo-700 flex items-center justify-center gap-1">
                    <FiTrendingDown className="text-blue-500" />
                    Loss
                  </th>
                  <th className="px-6 py-3 text-center font-semibold text-indigo-700">Win Rate</th>
                  <th className="px-6 py-3 text-center font-semibold text-indigo-700">Profit Factor</th>
                </tr>
              </thead>
              <tbody>
                {strategyStats.map((s, index) => (
                  <tr
                    key={index}
                    className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-indigo-50"} hover:bg-indigo-100 transition-colors`}
                  >
                    <td className="px-6 py-3 text-left font-medium text-gray-800">{s.strategy}</td>
                    <td className="px-6 py-3">{s.total}</td>
                    <td className="px-6 py-3 text-pink-600 font-semibold">{s.wins}</td>
                    <td className="px-6 py-3 text-blue-600 font-semibold">{s.losses}</td>
                    <td className="px-6 py-3">{s.winRate}</td>
                    <td className="px-6 py-3">{s.profitFactor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ==== GRAPHIQUES ==== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Bar Chart Win vs Loss */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FiBarChart2 className="text-indigo-500" />
                Trades Gagnants vs Perdants
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <XAxis dataKey="strategy" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip />
                  <Bar dataKey="wins" fill="#ec4899" />
                  <Bar dataKey="losses" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart Total Trades */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FiPieChart className="text-indigo-600" />
                Répartition des Trades par Stratégie
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={STRATEGY_COLORS[index % STRATEGY_COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ==== ÉVOLUTION MENSUELLE ==== */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <FiActivity className="text-pink-500" />
              Évolution Mensuelle des Profits
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="profit" stroke="#7c3aed" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;



