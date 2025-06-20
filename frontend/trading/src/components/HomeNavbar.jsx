
// src/components/HomeNavbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-15 w-55" />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 items-center text-base font-semibold">
          <Link
            to="/about"
            className="hover:text-white transition duration-300 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition duration-300 hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            to="/affiliates"
            className="hover:text-white transition duration-300 hover:underline underline-offset-4"
          >
            Affiliates
          </Link>
        </nav>

        {/* Buttons */}
<div className="hidden md:flex gap-4 items-center">
  <Link
    to="/login"
    className="text-base font-bold text-white relative group transition duration-300"
  >
    <span className="group-hover:text-white group-hover:underline group-hover:underline-offset-4 transition duration-300">
      Log In
    </span>
  </Link>
  <Link
    to="/signup"
    className="relative inline-block px-6 py-2 text-sm font-bold text-white rounded-full 
      bg-gradient-to-r from-pink-500 to-sky-500 shadow-lg transform transition-all duration-300
      hover:scale-105 hover:shadow-xl hover:text-black
      before:absolute before:inset-0 before:rounded-full
      before:bg-gradient-to-r before:from-pink-400 before:to-sky-400 before:opacity-0 
      hover:before:opacity-30 before:transition before:duration-300"
  >
    Sign up for Free
  </Link>
</div>


        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-600 to-sky-500 px-4 pb-4 space-y-2 text-white transition-all duration-300">
          <Link
            to="/about"
            className="block py-2 text-base font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-base font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/affiliates"
            className="block py-2 text-base font-semibold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Affiliates
          </Link>
          <Link
            to="/login"
            className="block py-2 text-base font-medium hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="block py-2 font-semibold text-white bg-gradient-to-r from-pink-500 to-sky-500 rounded-full text-center hover:scale-105 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Sign up for Free
          </Link>
        </div>
      )}
    </header>
  );
};

export default HomeNavbar;




