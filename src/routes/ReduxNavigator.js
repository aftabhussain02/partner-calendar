import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import MainNavigation from './index';

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const ReduxAppNavigator = reduxifyNavigator(MainNavigation, 'root');

class ReduxNavigator extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, state } = this.props;
    // console.log(state);
    if (state.index === 0) {
        BackHandler.exitApp();
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, state } = this.props;
    return <ReduxAppNavigator dispatch={dispatch} state={state} />;
  }
}

const mapStateToProps = state => {
  // console.log(state.user.editProfile);
  return { state: state.nav };
 };

export default connect(mapStateToProps)(ReduxNavigator);
