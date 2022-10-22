import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API_URL,
  timeout: 1000,
  headers: {
    authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNiwiZW1haWwiOiJnaGlmYXJpQGl0LnN0dWRlbnQucGVucy5hYy5pZCIsImlhdCI6MTY2NTIwODY2MCwiZXhwIjoxNjY3ODAwNjYwfQ.iGWxACfbPCyxUpsI7u6fyjn5wUdFi4SncSAZGu8lXUc",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token =
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNiwiZW1haWwiOiJnaGlmYXJpQGl0LnN0dWRlbnQucGVucy5hYy5pZCIsImlhdCI6MTY2NTIwODY2MCwiZXhwIjoxNjY3ODAwNjYwfQ.iGWxACfbPCyxUpsI7u6fyjn5wUdFi4SncSAZGu8lXUc";

    if (token) config.headers.Authorization = token;

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
