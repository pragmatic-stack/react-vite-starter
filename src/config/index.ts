const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const config = {
  apiUrl: API_URL,
  mode: import.meta.env.MODE,
};

export { API_URL, config };
