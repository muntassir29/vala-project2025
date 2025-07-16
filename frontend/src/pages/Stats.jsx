
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
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
import { motion } from "framer-motion";
import {
  FiPieChart,
  FiBarChart2,
  FiActivity,
} from "react-icons/fi";

const STRATEGY_COLORS = ["#7c3aed", "#ec4899", "#0ea5e9"]; // violet, rose, bleu

const Stats = () => {
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
      const res = await axiosInstance.get("/trades/strategies/stats");
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
      const res = await axiosInstance.get("/trades/stats/monthly");
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
    ratio: m.total !== 0 ? +(m.totalProfit / m.total).toFixed(2) : 0,
  }));

  const MotionTr = motion.tr;

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-md min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 flex justify-center gap-3">
        <FiPieChart className="text-indigo-600" size={40} />
        Statistiques de Trading
      </h1>

      {loading ? (
        <p className="text-gray-600 text-lg">Chargement des statistiques...</p>
      ) : error ? (
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      ) : (
        <>
          {/* Tableau des stratégies */}
          <div className="overflow-x-auto mb-16 shadow-lg rounded-lg border border-gray-300 bg-white">
            <table className="w-full table-auto border-collapse text-sm">
              <thead className="bg-gradient-to-r from-pink-500 to-sky-500 text-white">
                <tr>
                  <th className="px-6 sm:px-8 py-3 text-left font-semibold whitespace-nowrap">
                    Stratégie
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">Trades</th>
                  <th className="px-4 py-3 text-center font-semibold">Gain Moyen (pips)</th>
                  <th className="px-4 py-3 text-center font-semibold">Perte Moyenne (pips)</th>
                  <th className="px-4 py-3 text-center font-semibold">RR Moyen</th>
                  <th className="px-4 py-3 text-center font-semibold">Profit Net Total</th>
                  <th className="px-4 py-3 text-center font-semibold">Win Rate</th>
                  <th className="px-4 py-3 text-center font-semibold">Profit Factor</th>
                </tr>
              </thead>
              <tbody>
                {strategyStats.map((s, i) => {
                  const gainMoyen = s.wins > 0 ? s.totalProfit / s.wins : 0;
                  const perteMoyenne = s.losses > 0 ? s.totalLoss / s.losses : 0;
                  const rrMoyen = perteMoyenne > 0 ? gainMoyen / perteMoyenne : "∞";
                  const profitNet = s.totalProfit - s.totalLoss;

                  return (
                    <MotionTr
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`text-center transition-colors duration-300 ${
                        i % 2 === 0 ? "bg-white" : "bg-indigo-50"
                      } hover:bg-gradient-to-r hover:from-pink-100 hover:to-sky-100`}
                    >
                      <td className="px-6 sm:px-8 py-3 text-left font-medium text-gray-900 whitespace-nowrap">
                        {s.strategy}
                      </td>
                      <td className="px-4 py-3 font-semibold">{s.total}</td>
                      <td className="px-4 py-3 font-mono text-green-600">{gainMoyen.toFixed(2)}</td>
                      <td className="px-4 py-3 font-mono text-red-600">{perteMoyenne.toFixed(2)}</td>
                      <td className="px-4 py-3 font-mono text-indigo-700">
                        {typeof rrMoyen === "number" ? rrMoyen.toFixed(2) : rrMoyen}
                      </td>
                      <td className="px-4 py-3 font-mono font-semibold">{profitNet.toFixed(0)}</td>
                      <td className="px-4 py-3 font-mono">{s.winRate}</td>
                      <td className="px-4 py-3 font-mono">{s.profitFactor}</td>
                    </MotionTr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Bar Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
                <FiBarChart2 className="text-indigo-500" />
                Trades Gagnants vs Perdants
              </h2>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={barData}>
                  <XAxis dataKey="strategy" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip contentStyle={{ backgroundColor: "#fafafa", border: "1px solid #ddd" }} />
                  <Bar dataKey="wins" fill="#ec4899" />
                  <Bar dataKey="losses" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
                <FiPieChart className="text-indigo-600" />
                Répartition Globale Trades
              </h2>
              <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={STRATEGY_COLORS[index % STRATEGY_COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip contentStyle={{ backgroundColor: "#fafafa", border: "1px solid #ddd" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-white rounded-lg shadow p-6 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
              <FiPieChart className="text-indigo-600" />
              Répartition Globale Gagnants / Perdants
            </h2>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={[
                    {
                      name: "Gagnants",
                      value: strategyStats.reduce((acc, s) => acc + s.wins, 0),
                    },
                    {
                      name: "Perdants",
                      value: strategyStats.reduce((acc, s) => acc + s.losses, 0),
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#ef4444" />
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fafafa", border: "1px solid #ddd" }}
                  formatter={(value, name) => [`${value} trades`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-3">
              <FiActivity className="text-pink-600" />
              Évolution Mensuelle des Profits & Ratio
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#4B5563" />
                <YAxis
                  yAxisId="left"
                  stroke="#4B5563"
                  tickFormatter={(v) => `${v} pips`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#7c3aed"
                  tickFormatter={(v) => v.toFixed(2)}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fafafa", border: "1px solid #ddd" }}
                  formatter={(value, name) =>
                    name === "ratio" ? value.toFixed(2) : `${value} pips`
                  }
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="profit"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Profit (pips)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="ratio"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Ratio moyen"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
























