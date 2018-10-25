import { AsyncStorage } from 'react-native';
// import _ from 'lodash';
import axios from 'axios';
import {
  UPDATE_PROFILE,
  INITIALIZE_FAILED,
  UPDATE_EDIT_PROFILE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILED
  } from './types';
  import { firebaseLogIn } from './loginActions';
import { ApiUrl, Headers } from '../development';

export const initializeUser = () => async (dispatch) => {
  console.log('initializeUser');
  const token = await AsyncStorage.getItem('userToken');
  const headers = Headers(token);

  return axios.post(`${ApiUrl}/api/user`, null, { headers })
  .then(u => {
    dispatch(updateUser(u.data.data));
    firebaseLogIn(u.data.data.firebaseToken);
    return Promise.resolve(u.data.data);
  })
  .catch(e => {
    console.log(e.response);
    dispatch({ type: INITIALIZE_FAILED });
    return Promise.reject(e.response);
  });
};

export const updateUser = (user) => ({
  type: UPDATE_PROFILE,
  payload: user
});

export const updateEditProfile = ({ prop, value }) => ({
  type: UPDATE_EDIT_PROFILE,
  payload: { prop, value }
});

export const submitUpdateProfile = (updatedProfile) => async (dispatch) => {
  const token = await AsyncStorage.getItem('userToken');
  const headers = Headers(token);
  return axios.post(`${ApiUrl}/api/user/edit`, updatedProfile, { headers })
  .then(u => {
    // console.log(u);
    dispatch(updateUser(u.data.data));
    dispatch({ type: PROFILE_UPDATE_SUCCESS });
    return Promise.resolve(u);
  })
  .catch(e => {
    console.log(e.response);
    dispatch({ type: PROFILE_UPDATE_FAILED });
    return Promise.reject(e);
 });
};
