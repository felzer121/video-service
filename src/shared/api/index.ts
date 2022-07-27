import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_HOST,
    timeout: 1000,
    headers: {"Content-type": "application/json; charset=UTF-8"}
});