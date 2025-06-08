/**
 * Redux slice for managing application state
 *
 * This slice handles both synchronous and asynchronous state updates
 * using Redux Toolkit's createSlice and createAsyncThunk.
 */
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { AppState } from "../../types";

/**
 * Initial state for the application
 */
const initialState: AppState = {
  count: 0,
  asyncCount: 0,
  isTrue: true,
};

/**
 * Async thunk for fetching and updating the async count
 * Simulates an API call with a 2-second delay
 *
 * @param value - The value to set the async count to
 * @returns Promise that resolves to the provided value
 */
const fetchAsyncCount = createAsyncThunk(
  "app/fetchAsyncCount",
  async (value: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return value;
  }
);

/**
 * Redux slice for the application state
 */
const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /**
     * Increments the synchronous counter
     */
    increment: (state) => {
      state.count = state.count + 1;
    },
    /**
     * Decrements the synchronous counter
     */
    decrement: (state) => {
      state.count = state.count - 1;
    },
    /**
     * Increments the asynchronous counter
     */
    async_increment: (state) => {
      state.asyncCount = state.asyncCount + 1;
    },
    /**
     * Decrements the asynchronous counter
     */
    async_decrement: (state) => {
      state.asyncCount = state.asyncCount - 1;
    },
    /**
     * Updates the asynchronous counter with a specific value
     */
    update_async_count: (state, action: PayloadAction<number>) => {
      state.asyncCount = action.payload;
    },
    /**
     * Toggles the boolean condition
     */
    toggle_condition: (state) => {
      state.isTrue = !state.isTrue;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAsyncCount.fulfilled, (state, action) => {
      state.asyncCount = action.payload;
    });
  },
});

// Export actions
export const {
  increment,
  decrement,
  async_increment,
  async_decrement,
  update_async_count,
  toggle_condition,
} = AppSlice.actions;

// Export reducer and async thunk
export default AppSlice.reducer;
export { fetchAsyncCount };
