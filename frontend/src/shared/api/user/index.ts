import axios, { AxiosError } from "axios";
import { errorHandle, instance } from "..";
import { createEffect } from "effector";

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

export interface authorization {
  username: string;
  password: string;
}

export const authorizationFx = createEffect(
  async ({ username, password }: authorization) => {
    const req = await fetch(
      `${import.meta.env.VITE_BACKEND_SERVER_HOST}/authorization`,
      {
        method: "POST",
        body: JSON.stringify({ login: username, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return req.json();
  }
);

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
