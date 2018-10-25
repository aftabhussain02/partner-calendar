import { NOTIFICATION_FETCH_SUCCESS } from '../actions';

const initState = {
  
};

export default (state = initState, action) => {
  switch (action.type) {
    case NOTIFICATION_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
