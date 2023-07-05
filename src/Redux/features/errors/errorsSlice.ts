import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ErrorState {
    messages: string[];
}

const initialState: ErrorState = {
  messages: [],
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{ message: string[] }>) {
      state.messages = [...state.messages, ...action.payload.message];
    },
    clearError() {
      return initialState;
    },
  },
});

export const {setError, clearError} = errorSlice.actions;

export default errorSlice.reducer;
