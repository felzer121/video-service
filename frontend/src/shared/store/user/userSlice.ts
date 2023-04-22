import { createSlice } from "@reduxjs/toolkit";
import { createEffect, createStore } from "effector";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

const getTodoFx = createEffect(async ({ id }) => {
  const req = await fetch(`http://localhost:8000/api/authorization`);
  return req.json();
});

const $user = createStore(null).on(
  getTodoFx.doneData,
  (state, result) => result.username
);

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setAuth: (state, action) => {
//       state.isAuth = action.payload;
//     },
//   },
// });

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
