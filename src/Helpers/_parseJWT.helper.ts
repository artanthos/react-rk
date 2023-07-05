import {UserRoleTypes} from 'src/Constants';

interface JwtPayload {
    userId: string | null;
    isAdmin: boolean;
    roles?: UserRoleTypes[];
    exp?: number;
    email: string;
}

const parseJwt = (token: string): JwtPayload => {
  let jsonPayload = JSON.stringify({userId: null, isAdmin: false});

  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join('')
    );
  } catch (_) {
    jsonPayload = JSON.stringify({userId: null, isAdmin: false, roles: [], exp: 0});
  }

  return JSON.parse(jsonPayload);
};

export const isValidToken = (accessToken: string): boolean => {
  if (!accessToken) {
    return false;
  }

  const decoded = parseJwt(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp !== undefined && decoded.exp > currentTime;
};

export default parseJwt;
