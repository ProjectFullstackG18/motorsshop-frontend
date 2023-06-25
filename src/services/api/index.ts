import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 9000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("motorshop@token");
    if (token) {
      console.log(token);
      config.headers.Authorization = "Baerer " + token;
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
