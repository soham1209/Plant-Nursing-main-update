import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://plant-nursing-main-update-backend.onrender.com/api',
  // baseURL: 'http://localhost:5000/api',
  withCredentials: true, // For cookies, not needed for localStorage
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Attach token from localStorage to all requests
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
