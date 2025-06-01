// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white md:hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Trading Journal</h1>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="px-4 pb-4 space-y-2">
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded-md hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;












