import { createSlice } from "@reduxjs/toolkit";
import { createEffect, createStore } from "effector";
import type { PayloadAction } from "@reduxjs/toolkit";
import { defineConfig, loadEnv } from "vite";
import { useReducedMotion } from "react-spring";

// export interface authorization {
//   username: string
//   password: string
// }

export const getUserFx = createEffect(async () => {
  const req = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_HOST}/user`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return req.json();
});

export const $user = createStore(null).on(getUserFx.doneData, (_, user) => {
  try {
    if (user.response.error) throw Error(user.response.message);
    if (user.data.accessToken)
      localStorage.setItem("accessToken", user.data.accessToken);

    return user.data;
  } catch (e) {
    console.log(e);
  }
});
