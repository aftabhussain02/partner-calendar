import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { updateLogin } from '../actions';

class Logout extends Component {
  componentDidMount = async() => {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log(e);
    } finally {
      this.props.updateLogin({ prop: 'success', value: false });
      this.props.navigation.navigate('AuthLoading');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

export default connect(null, { updateLogin })(Logout);
