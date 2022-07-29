import axios, { AxiosError } from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_HOST,
    withCredentials: true,
    timeout: 1000,
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

export const errorHandle = (error:AxiosError) => {
    if (error.response) {
        return typeof(error.response?.data) === 'string' ? error.response?.data : 'Неизвестная ошибка'
    } else {
        return 'Неизвестная ошибка'
    }
}