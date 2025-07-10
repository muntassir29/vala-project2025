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
  ? "http://localhost:9000/api"  // attention ici le port est 9000 (d'après ton log render)
  : "https://journaltrading-mr0j.onrender.com/api"; // URL backend render

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default axiosInstance;
