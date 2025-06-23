// Sidebar.jsx
// import { Link, useNavigate } from "react-router-dom";
// import {
//   LogOut,
//   LayoutDashboard,
//   BarChart2,
//   Target,
//   StickyNote,
// } from "lucide-react";
// import { useAuth } from "../context/AuthContext";

// const Sidebar = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white min-h-screen p-4">
//       <h2 className="text-2xl font-bold mb-6">Trading Journal</h2>
//       <nav className="flex-1 space-y-2">
//         <Link
//           to="/dashboard"
//           className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
//         >
//           <LayoutDashboard size={20} /> Dashboard
//         </Link>
//         <Link
//           to="/stats"
//           className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
//         >
//           <BarChart2 size={20} /> Statistiques
//         </Link>
//         <Link
//           to="/goals"
//           className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
//         >
//           <Target size={20} /> Objectifs
//         </Link>
//         <Link
//           to="/notes"
//           className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
//         >
//           <StickyNote size={20} /> Notes
//         </Link>
//       </nav>
//       <button
//         onClick={handleLogout}
//         className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-red-600 bg-red-500 mt-auto"
//       >
//         <LogOut size={20} /> Déconnexion
//       </button>
//     </aside>
//   );
// };

// export default Sidebar;


import { Link, useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  BarChart2,
  Target,
  StickyNote,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png"; // ✅ Import du logo

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md min-h-screen p-4">
      {/* ✅ Logo image cliquable vers le dashboard */}
      <Link to="/dashboard" className="mb-6">
        <img src={logo} alt="Trading Journal Logo" className="h-17 w-auto" />
      </Link>

      <nav className="flex-1 space-y-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          to="/stats"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <BarChart2 size={20} /> Statistiques
        </Link>
        <Link
          to="/goals"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <Target size={20} /> Objectifs
        </Link>
        <Link
          to="/notes"
          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-700"
        >
          <StickyNote size={20} /> Notes
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-red-600 bg-red-500 mt-auto"
      >
        <LogOut size={20} /> Déconnexion
      </button>
    </aside>
  );
};

export default Sidebar;














