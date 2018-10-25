import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import LoginReducer from './LoginReducer';
import MainNavigation from '../routes';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import ConfirmBookingReducer from './ConfirmBookingReducer';

const NavReducer = createNavigationReducer(MainNavigation);

export default combineReducers({
  login: LoginReducer,
  nav: NavReducer,
  user: UserReducer,
  notifications: NotificationReducer,
  confirmBooking: ConfirmBookingReducer
});
