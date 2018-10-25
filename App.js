import React from 'react';
// import { Notifications } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import ReduxNavigator, { appNavigatorMiddleware } from './src/routes/ReduxNavigator';
import reducers from './src/reducers';
// import registerForPushNotificationsAsync from './src/development/notification';

console.ignoredYellowBox = ['React.createElement: type is', 'Setting a timer'];

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, appNavigatorMiddleware));

export default class App extends React.Component {
  componentDidMount() {
    // registerForPushNotificationsAsync();
    //
    // this._notificationSubscription = Notifications.addListener(
    //   this._handleNotification
    // );

    const config = {
    apiKey: 'AIzaSyCO_VxoYVdK2yGmnpYI_mUgiu0EgYM2JxQ',
    authDomain: 'partner-calendar.firebaseapp.com',
    databaseURL: 'https://partner-calendar.firebaseio.com',
    projectId: 'partner-calendar',
    storageBucket: 'partner-calendar.appspot.com',
    messagingSenderId: '27536757685'
  };
  firebase.initializeApp(config);
  }

  // _handleNotification(notification) {
  //   console.log(notification);
  // }

  render() {
    return (
      <Provider store={store}>
        <ReduxNavigator />
       </Provider>
    );
  }
}
