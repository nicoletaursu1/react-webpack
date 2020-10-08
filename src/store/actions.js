export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCES';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authorize = (email, password) => ({
  type: AUTH_REQUEST,
  payload: { email, password }
});
