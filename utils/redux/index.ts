"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { userReducer } from "./userSlice";
import { authReducer } from "./authSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState", "accessToken", "refreshToken"],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
