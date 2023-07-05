import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {parseJWT} from 'src/Helpers';
import {UserRoleTypes} from 'src/Constants';

export interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    userId: string | null;
    email: string | null;
    roles: string[];
}

interface SetTokenPayload {
    accessToken: string;
    refreshToken: string;
    roles: UserRoleTypes[];
    userId: string | null;
    email: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  userId: null,
  email: null,
  roles: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<SetTokenPayload>) => {
      const {accessToken, refreshToken} = action.payload;
      const {userId, roles = [], email} = parseJWT(accessToken);

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.roles = roles;
      state.userId = userId;
      state.email = email;
    },
    clearToken: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userId = null;
      state.email = null;
      state.roles = [];
    },
  },
});

export const {setToken, clearToken} = authSlice.actions;

export default authSlice.reducer;
