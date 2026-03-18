import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("v-t") || ""}`,
  },
});

//interceptors
baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("v-t");
      localStorage.removeItem("v-u");
      location.href = "/";
    }
    return Promise.reject(error);
  },
);
