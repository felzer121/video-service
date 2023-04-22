import axios, { AxiosError } from "axios";
import { errorHandle, instance } from "..";

export const login = async (email: string, password: string) => {
  const request = {
    email: email,
    password: password,
  };
  try {
    const response = await instance.post("authorization", { ...request });
    localStorage.setItem("token", response.data.accessToken);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    throw errorHandle(error);
  }
};

export const register = async (email: string, password: string) => {
  const request = {
    email: email,
    password: password,
  };
  try {
    const response = await instance.post("registration", { ...request });
    localStorage.setItem("token", response.data.accessToken);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    throw errorHandle(error);
  }
};

export const checkAuth = async () => {
  try {
    const response = await instance.get("refresh");
    localStorage.setItem("token", response.data.accessToken);
    return response;
  } catch (err) {
    const error = err as AxiosError;
    throw errorHandle(error);
  }
};
