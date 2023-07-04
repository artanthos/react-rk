import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from 'react';
import {
  retrieveCookie,
  setCookie,
} from 'Helpers';
import { useSelector, useDispatch } from 'react-redux';
import { clearToken, setToken } from 'Redux/features/auth/authSlice';
import { RESET_STATE_ACTION_TYPE } from 'Redux/actions';

const reducer = (state, action) => {
  switch (action.type) {
  case 'INITIAL':
    return {
      isAuthenticated: true,
      accountRoles: action.payload.accountRoles,
      isLoggedIn: true,
    };
  case 'LOGOUT':
    return {
      isAuthenticated: false,
      accountRoles: [],
      isLoggedIn: false,
    };
  default:
    return {
      isAuthenticated: false,
      accountRoles: [],
      isLoggedIn: false,
    };
  }
};

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const {
    userId, roles,
  } = useSelector((stateRtk) => stateRtk.auth);

  const [state, dispatchContext] = useReducer(reducer, {
    isAuthenticated: retrieveCookie('token'),
    accountRoles: roles,
    isLoggedIn: retrieveCookie('token'),
  });

  const initialize = useCallback(async () => {
    if (
      retrieveCookie('token')
      && retrieveCookie('refreshToken')
    ) {
      dispatch(setToken({
        accessToken: retrieveCookie('token'),
        refreshToken: retrieveCookie('refreshToken'),
      }));
    } else {
      dispatch(clearToken());
      dispatch({ type: RESET_STATE_ACTION_TYPE });
    }

    try {
      if (retrieveCookie('token')) {
        const isLoggedIn = (!!userId && !!retrieveCookie('token'));

        dispatchContext({
          type: 'INITIAL',
          payload: {
            isAuthenticated: isLoggedIn,
            accountRoles: roles,
          },
        });
      } else {
        dispatchContext({
          type: 'LOGOUT',
          payload: {
            isAuthenticated: false,
          },
        });
      }
    } catch (error) {
      dispatchContext({
        type: 'LOGOUT',
        payload: {
          isAuthenticated: false,
        },
      });
    }
  }, [userId]);

  useEffect(() => {
    initialize();
  }, [
    initialize,
  ]);

  // LOGIN
  const login = useCallback(async ({
    accessToken,
    refreshToken,
  }) => {
    dispatch(setToken({
      accessToken,
      refreshToken,
    }));

    setCookie('token', accessToken);
    setCookie('refreshToken', refreshToken);


    dispatchContext({
      type: 'INITIAL',
      payload: {
        accountRoles: roles,
      },
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      isLoggedIn: state.isAuthenticated,
      accountRoles: state.accountRoles,
      login,
    }),
    [
      state.isAuthenticated,
      state.accountRoles,
      login,
    ],
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
