import {
  UPDATE_LOGIN,
  ATTEMPT_LOGIN,
  FAILED_LOGIN,
  SUCCESS_LOGIN
 } from '../actions/types';

const initState = {
  email: 'admin@padharo.co',
  password: '123456',
  loading: false,
  error: '',
  success: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ATTEMPT_LOGIN:
      return { ...state, error: '', loading: true };
    case FAILED_LOGIN:
      return { ...state, error: action.payload, password: '', loading: false };
    case SUCCESS_LOGIN:
      // return { ...state, error: '', email: '', password: '', loading: false, success: true };
      return { ...state, error: '', success: true, loading: false };
    default:
      return state;
  }
};
