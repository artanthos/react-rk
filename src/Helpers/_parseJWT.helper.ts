const parseJwt = (token) => {
  let jsonPayload = JSON.stringify({ userId: null, isAdmin: false });

  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join(''),
    );
  } catch (_) {
    jsonPayload = JSON.stringify({ userId: null, isAdmin: false, roles: [] });
  }

  return JSON.parse(jsonPayload);
};

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decoded = parseJwt(accessToken);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

export default parseJwt;

