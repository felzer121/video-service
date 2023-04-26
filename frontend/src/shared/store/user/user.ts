import { createSlice } from "@reduxjs/toolkit";
import { createEffect, createStore } from "effector";
import type { PayloadAction } from "@reduxjs/toolkit";
import { defineConfig, loadEnv } from 'vite';

export interface authorization {
  username: string
  password: string
}


export const getUserFx = createEffect(async () => {
  const req = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_HOST}/user`);
  return req.json();
})

export const authorizationFx = createEffect(async ({username, password}: authorization) => {
  
  const req = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_HOST}/authorization`, {
    method: 'POST',
    body: JSON.stringify({login: username, password: password})
  })
  return req.json();
})

export const $user = createStore(null).on(getUserFx.doneData, (_, todo) => console.log(todo))