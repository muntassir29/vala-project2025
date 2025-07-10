// // src/api/axiosInstance.js
// import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     withCredentials: true,
// });

// export default axiosInstance;


// src/api/axiosInstance.js
import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:9000/api"
  : "https://trading-journal-am1b.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true, // décommente si tu utilises cookies
});

export default axiosInstance;
