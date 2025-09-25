import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState: CounterState = {
  value: 0,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      state.value = action.payload;
      state.isReady = true;
    },
    incrementOne: (state) => {
      state.value += 1;
    },
    decrementOne: (state) => {
      if (state.value === 0) return;
      state.value -= 1;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initCounterState, incrementOne, decrementOne, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
