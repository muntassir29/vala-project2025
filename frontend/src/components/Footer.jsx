import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // pour l’icône X (ex-Twitter)

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-gray-200 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Liens de navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/about" className="hover:underline hover:text-white">About</Link>
          <Link to="/contact" className="hover:underline hover:text-white">Contact</Link>
          <Link to="/affiliates" className="hover:underline hover:text-white">Affiliates</Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 text-xl">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-black transition">
            <FaXTwitter />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaFacebook />
            </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Trading Journal. All rights reserved.
      </div>
    </footer>
  );
}




