import _ from 'lodash';
import {
  UPDATE_PROFILE,
  UPDATE_EDIT_PROFILE
 } from '../actions';

const initState = {
  profile: {

  },
  editProfile: {
    contact: '',
    alternative_contact: '',
    name: ''
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    case UPDATE_EDIT_PROFILE:
      const editProfile = _.assign({},
        state.editProfile,
        { [action.payload.prop]: action.payload.value },
       );
      // console.log(editProfile);
      return { ...state, editProfile };
    default:
      return state;
  }
};
