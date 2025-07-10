// // src/api/axiosInstance.js
// import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true,
// });

// export default axiosInstance;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL || "/api";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// export default axiosInstance;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/services/axiosInstance.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://trading-journal-am1b.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Ajout automatique du token à chaque requête
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;



