import axios from "axios";

/*
  This is the API service for making requests to the backend.
*/
const apiURL = import.meta.env.VITE_API_URL;
let interceptorId;

const api = axios.create({
  baseURL: apiURL,
  withCredentials: true, // to send cookies automatically
});

/*
  This is the API service for attaching the token interceptor.
  This interceptor adds the Authorization header with the Bearer token to each request.
*/
export const attachTokenInterceptor = (getToken) => {
  // Eject the previous interceptor if it exists
  if (interceptorId) api.interceptors.request.eject(interceptorId);

  // Register/attach a new interceptor and store its ID
  interceptorId = api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default api;
