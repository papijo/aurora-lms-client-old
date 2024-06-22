"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: boolean;
  accesstoken: string;
  refreshtoken: string;
}

const initialState: IAuthState = {
  authState: false,
  accesstoken: "",
  refreshtoken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accesstoken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshtoken = action.payload;
    },
  },
});

export const { setAuthState, setAccessToken, setRefreshToken } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
