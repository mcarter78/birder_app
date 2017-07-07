import * as types from './actionTypes';
import sessionApi from '../utils/SessionApi';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

export function logInUser(credentials) {
  return function (dispatch) {
    return sessionApi.login(credentials).then((response) => {
      if (response.token !== undefined) {
        sessionStorage.setItem('jwt', response.token);
        dispatch(loginSuccess());
      }
    }).catch((error) => {
      throw (error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return { type: types.LOG_OUT };
}
