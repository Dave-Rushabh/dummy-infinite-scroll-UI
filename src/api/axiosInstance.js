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
    console.error(`Error in response for ${error.config.url} :`, error);
    return Promise.reject(error);
  }
);

export const postData = async (endpoint, payload) => {
  try {
    const response = await axiosInstance.post(endpoint, payload);
    return response;
  } catch (error) {
    console.error(error, "<<== error");
    throw error;
  }
};

export default axiosInstance;
