import { IS_AUTHENTICATED } from './actionTypes';

export function isAuthenticated(user) {
  return {
    type: IS_AUTHENTICATED,
    user: user,
  };
}
