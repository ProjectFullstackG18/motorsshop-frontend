import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("motorshop@token");
    if (token) {
      config.headers.Authorization = JSON.parse(token).token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiCars = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 5000,
});
