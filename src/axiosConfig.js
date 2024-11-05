// src/axiosConfig.js
import axios from 'axios';

// Créer une instance Axios
const api = axios.create({
  baseURL: 'http://localhost:3000' // URL de base de ton backend
});

// Ajouter un intercepteur pour inclure le token dans chaque requête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
