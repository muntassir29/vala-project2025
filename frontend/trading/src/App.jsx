// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar"; // <--- important
// import PrivateRoute from "./components/PrivateRoute";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
// import Stats from "./pages/Stats";
// import { useEffect } from "react";

// const AppContent = () => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const isPrivateRoute = location.pathname.startsWith("/dashboard");

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex flex-1">
//         {user && isPrivateRoute && <Sidebar />}
//         <main className="flex-grow container mx-auto px-4 py-6">
//           <Routes>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="/stats" element={<PrivateRoute><Stats /></PrivateRoute>} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//       </div>
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


import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Stats from "./pages/Stats";
import Goals from "./pages/Goals";
import Notes from "./pages/Notes";

import PrivateLayout from "./layouts/PrivateLayout";

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🛡️ Toutes les routes privées avec layout commun */}
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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
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

