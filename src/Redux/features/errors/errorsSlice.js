import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};
export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.messages = [...state.messages, ...action.payload.message];
    },
    clearError() {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
