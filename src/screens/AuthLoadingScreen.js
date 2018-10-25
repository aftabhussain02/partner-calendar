import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { initializeUser } from '../actions';
import { StyleSheet } from '../development';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.props.initializeUser()
    .then(() => this.props.navigation.navigate('App'))
    .catch(() => this.props.navigation.navigate('Auth'));
    }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={StyleSheet.color} />
      </View>
    );
  }
}

export default connect(null, { initializeUser })(AuthLoadingScreen);
