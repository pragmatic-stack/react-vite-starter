const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const API_MOCKING = import.meta.env.VITE_API_MOCKING || true;
const MODE = import.meta.env.MODE || 'development';

const config = {
  mode: MODE,
  apiUrl: API_URL,
  apiMocking: API_MOCKING,
};

export { API_URL, config };
