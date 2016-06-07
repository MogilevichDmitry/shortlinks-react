import { SIGN_IN, SIGN_UP, LOGOUT } from '../actions/user';

export default function (state = {}, action) {
  switch (action.type) {
    case `${SIGN_UP}_SUCCESS`:
    case `${SIGN_IN}_SUCCESS`:
      return {
        ...action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}