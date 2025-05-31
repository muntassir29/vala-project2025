// import React, { createContext, useContext, useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode"; // ✅ CORRECT

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       try {
//         const decoded = jwtDecode(storedToken);
//         setToken(storedToken);
//         setUser(decoded); // le user est décodé à partir du token
//       } catch (err) {
//         console.error("Token invalide", err);
//         logout(); // Nettoyer si token cassé
//       }
//     }
//   }, []);

//   const login = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//     const decoded = jwtDecode(newToken);
//     setUser(decoded);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      // Exemple : tu peux vérifier le token, fetch user, ou décoder le token
      setUser({ email: "user@example.com" }); // Exemple statique
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  const login = (newToken, userData) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};






