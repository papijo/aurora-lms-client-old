"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  user: object | undefined;
}

const initialState: IUserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
