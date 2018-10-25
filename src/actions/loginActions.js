import { AsyncStorage } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';
import { UPDATE_LOGIN, ATTEMPT_LOGIN, SUCCESS_LOGIN, FAILED_LOGIN } from './types';
import { ApiUrl, Headers } from '../development';

export const updateLogin = ({ prop, value }) => ({
  type: UPDATE_LOGIN,
  payload: { prop, value }
});

export const attemptLogin = (email, password) => async (dispatch) => {
  dispatch({ type: ATTEMPT_LOGIN });
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  axios.post(`${ApiUrl}/api/login`, formData)
  .then(async (u) => {
    try {
         await AsyncStorage.setItem('userToken', `Bearer ${u.data.data.token}`);
       } catch (e) {
         console.log(e.response);
       } finally {
         dispatch({ type: SUCCESS_LOGIN });
       }
  })
  .catch(e => {
    console.log(e); dispatch({ type: FAILED_LOGIN, payload: e.response.data.error });
  });
};

export const firebaseLogIn = (token) => {
  firebase.auth().signInWithCustomToken(token)
  .then(() => console.log('login SUCCESS FIRE'))
  .catch(e => console.log(e));
};
