import { createAction } from 'redux-actions';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SET_NEXT_PATHNAME = 'SET_NEXT_PATHNAME';
export const LOGOUT = 'LOGOUT';

export const setNextPathname = createAction(SET_NEXT_PATHNAME);

export function signUp(name, password) {
  return {
    type: SIGN_UP,
    payload: {
      url: '/users',
      method: 'post',
      body: { name, password },
    },
  };
}

export function signIn(name, password) {
  return {
    type: SIGN_IN,
    payload: {
      url: '/authenticate',
      method: 'post',
      body: { name, password },
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}