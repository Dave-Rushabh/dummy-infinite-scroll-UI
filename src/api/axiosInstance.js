import axios from "axios";

// Creating axios instance with common endpoint
const axiosInstance = axios.create({
  baseURL: "https://api.weekday.technology",
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding axios interceptor for the response
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
