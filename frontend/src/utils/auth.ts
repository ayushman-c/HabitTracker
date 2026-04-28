export const getToken = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
};

export const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export const clearToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

export const decodeJwt = <T = Record<string, unknown>>(token?: string | null): T | null => {
  if (!token) return null;

  const payload = token.split('.')[1];
  if (!payload) return null;

  try {
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded) as T;
  } catch (error) {
    return null;
  }
};
