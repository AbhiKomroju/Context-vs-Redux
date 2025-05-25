import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { AppState } from "../../types";

const initialState: AppState = {
  count: 0,
  asyncCount: 0,
  isTrue: true,
};

const fetchAsyncCount = createAsyncThunk(
  "app/fetchAsyncCount",
  async (value: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return value;
  }
);

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    async_increment: (state) => {
      state.asyncCount = state.asyncCount + 1;
    },
    async_decrement: (state) => {
      state.asyncCount = state.asyncCount - 1;
    },
    update_async_count: (state, action: PayloadAction<number>) => {
      state.asyncCount = action.payload;
    },
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

export const {
  increment,
  decrement,
  async_increment,
  async_decrement,
  update_async_count,
  toggle_condition,
} = AppSlice.actions;
export default AppSlice.reducer;
export { fetchAsyncCount };
