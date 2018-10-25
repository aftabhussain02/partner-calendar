import firebase from 'firebase';
import { NOTIFICATION_FETCH_SUCCESS } from './types';

export const fetchNotifications = (id) => (dispatch) => {
  firebase.database().ref(`users/${id}/notifications`)
  .on('value', snapshot => {
    dispatch({
      payload: snapshot.val(),
      type: NOTIFICATION_FETCH_SUCCESS
    });
  });
};
