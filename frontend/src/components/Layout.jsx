// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Navbar />
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
