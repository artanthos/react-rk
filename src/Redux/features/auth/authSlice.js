import { createSlice } from '@reduxjs/toolkit';
import { parseJWT } from 'Helpers';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    refreshToken: null,
    userId: null,
    email: null,
    roles: [],
  },
  reducers: {
    setToken(_state, action) {
      const { accessToken, refreshToken } = action.payload;
      const {
        userId, roles = ['PUBLIC'], email,
      } = parseJWT(accessToken);

      return {
        accessToken,
        refreshToken,
        roles,
        userId,
        email,
      };
    },
    clearToken() {
      return {
        accessToken: null,
        refreshToken: null,
        userId: null,
        email: null,
        roles: [],
      };
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
