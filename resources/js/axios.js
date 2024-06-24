import axios from 'axios';

const mainURL = axios.create({
  /** localhost */
  baseURL: 'http://localhost:8000/api/v1',
  /** development */
  /** production */
});
// Interceptor untuk menambahkan token ke header Authorization
mainURL.interceptors.request.use(
  config => {
    const savedUserToken = localStorage.getItem("userToken");
    if (savedUserToken) {
      config.headers.Authorization = `Bearer ${savedUserToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default mainURL;
