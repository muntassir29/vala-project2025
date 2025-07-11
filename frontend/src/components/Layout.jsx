import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal centré */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

