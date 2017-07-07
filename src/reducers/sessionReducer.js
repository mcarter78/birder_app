import { browserHistory } from 'react-router';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/profile');
      return !!sessionStorage.jwt;
    case types.LOG_OUT:
      browserHistory.push('/');
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}

export default sessionReducer;
