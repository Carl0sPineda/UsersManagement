import axios from "axios";
import { useAuthStore } from "../../stores/auth.stores";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5278/api",
});

// Leer el store de Zustand
axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance };
