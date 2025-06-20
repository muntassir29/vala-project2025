
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
// import Stats from "./pages/Stats";
// import Goals from "./pages/Goals";
// import Notes from "./pages/Notes";

// import PrivateLayout from "./layouts/PrivateLayout";

// const AppContent = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />


//         {/* 🛡️ Toutes les routes privées avec layout commun */}
//         <Route
//           element={
//             <PrivateRoute>
//               <PrivateLayout />
//             </PrivateRoute>
//           }
//         >
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/stats" element={<Stats />} />
//           <Route path="/goals" element={<Goals />} />
//           <Route path="/notes" element={<Notes />} />
//         </Route>

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// }


// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Affiliates from "./pages/Affiliates";

// import Dashboard from "./pages/Dashboard";
// import Stats from "./pages/Stats";
// import Goals from "./pages/Goals";
// import Notes from "./pages/Notes";
// import NotFound from "./pages/NotFound";

// import PrivateLayout from "./layouts/PrivateLayout";

// const AppContent = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <Routes>
//         {/* Page publique d’accueil */}
//         <Route path="/" element={<Home />} />

//         {/* Pages publiques */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/affiliates" element={<Affiliates />} />

//         {/* Routes privées avec layout commun */}
//         <Route
//           element={
//             <PrivateRoute>
//               <PrivateLayout />
//             </PrivateRoute>
//           }
//         >
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/stats" element={<Stats />} />
//           <Route path="/goals" element={<Goals />} />
//           <Route path="/notes" element={<Notes />} />
//         </Route>

//         {/* Page 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// }


// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages publiques
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Affiliates from "./pages/Affiliates";

// Pages privées
import Dashboard from "./pages/Dashboard";
import Stats from "./pages/Stats";
import Goals from "./pages/Goals";
import Notes from "./pages/Notes";

// Autres composants
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayout";
import Navbar from "./components/Navbar"; // Navbar pour utilisateur connecté
import HomeNavbar from "./components/HomeNavbar"; // Navbar publique
import Footer from "./components/Footer";

const AppContent = () => {
  const location = useLocation();
  const path = location.pathname;

  const isPublic =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/about" ||
    path === "/contact" ||
    path === "/affiliates";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar dynamique selon route */}
      {isPublic ? <HomeNavbar /> : <Navbar />}

      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliates" element={<Affiliates />} />

        {/* Routes privées */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/notes" element={<Notes />} />
        </Route>

        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer commun à toutes les pages */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}




