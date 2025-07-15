
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, BarChart2, Target, StickyNote, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/stats", label: "Statistiques", icon: <BarChart2 size={20} /> },
    { to: "/goals", label: "Objectifs", icon: <Target size={20} /> },
    { to: "/notes", label: "Notes", icon: <StickyNote size={20} /> },
  ];

  return (
    <header className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md md:hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="px-4 pb-4 space-y-2">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 ${
                location.pathname === to ? "bg-gray-700" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-600 bg-red-500 transition"
          >
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;























