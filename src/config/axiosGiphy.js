import axios from "axios";

const urlApi = import.meta.env.VITE_URL_API;

export const reqAxiosHook = axios.create({
  baseURL: urlApi,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    //token: "jasdhasdasd",
  },
});
