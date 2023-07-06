import React, {createContext, useEffect, useReducer, useCallback, useMemo} from 'react';
import {retrieveCookie, setCookie} from 'src/Helpers';
import {useSelector, useDispatch} from 'react-redux';
import {AuthState, clearToken, setToken} from 'src/Redux/features/auth/authSlice';
import {RESET_STATE_ACTION_TYPE} from 'src/Redux/actions';

interface ContextState {
    isAuthenticated: boolean;
    accountRoles: string[];
    isLoggedIn: boolean;
}

interface ContextActionPayload {
    accessToken: string;
    refreshToken: string
}

interface AuthContextProps {
    isAuthenticated: boolean;
    isLoggedIn: boolean;
    accountRoles: string[];
    // eslint-disable-next-line no-unused-vars
    login: (data: ContextActionPayload) => void;
}

type ContextAction =
    | { type: 'INITIAL'; payload: { accountRoles: string[] } }
    | { type: 'LOGOUT'; payload: { isAuthenticated: boolean } };

// eslint-disable-next-line
// @ts-ignore
const reducer = (state: ContextState, action: ContextAction): ContextState => {
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

export const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({children}: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const {userId, roles} = useSelector((state: { auth: AuthState }) => state.auth);

  const [state, dispatchContext] = useReducer(reducer, {
    isAuthenticated: !!retrieveCookie('token'),
    accountRoles: roles,
    isLoggedIn: !!retrieveCookie('token'),
  });

  const initialize = useCallback(async () => {
    if (retrieveCookie('token') && retrieveCookie('refreshToken')) {
      dispatch(
        setToken({
          accessToken: retrieveCookie('token'),
          refreshToken: retrieveCookie('refreshToken'),
        })
      );
    } else {
      dispatch(clearToken());
      dispatch({type: RESET_STATE_ACTION_TYPE});
    }

    try {
      if (retrieveCookie('token')) {
        const isLoggedIn = !!userId && !!retrieveCookie('token');

        if (isLoggedIn) {

          dispatchContext({
            type: 'INITIAL',
            payload: {
              accountRoles: roles,
            },
          });
        }
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
  }, [initialize]);

  // LOGIN
  const login = useCallback(
    async ({accessToken, refreshToken}: { accessToken: string; refreshToken: string }) => {
      dispatch(
        setToken({
          accessToken,
          refreshToken,
        })
      );

      setCookie('token', accessToken);
      setCookie('refreshToken', refreshToken);

      dispatchContext({
        type: 'INITIAL',
        payload: {
          accountRoles: roles,
        },
      });
    },
    []
  );

  const memoizedValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      isLoggedIn: state.isAuthenticated,
      accountRoles: state.accountRoles,
      login,
    }),
    [state.isAuthenticated, state.accountRoles, login]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
