/**
 * Redux store configuration
 *
 * This file configures the Redux store using Redux Toolkit's configureStore.
 * It sets up the root reducer and exports type definitions for the store state
 * and dispatch function.
 */
import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./AppSlice.ts";

/**
 * Configure and create the Redux store
 */
const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});

/**
 * Type definition for the root state
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type definition for the store's dispatch function
 */
export type AppDispatch = typeof store.dispatch;

export default store;
