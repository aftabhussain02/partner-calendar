import React, { Component } from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Input } from './common';
import { updateLogin, attemptLogin } from '../actions';

class Login extends Component {
  componentWillReceiveProps(props) {
    if (props.success) {
      props.navigation.navigate('AuthLoading');
    }
  }

  render() {
    const {
      ImageBackgroundStyle,
      containerStyle,
      logoStyle,
      section
     } = styles;

     const { email, password, loading, error } = this.props;

    return (
      <ImageBackground
        source={require('../images/loginBackground.jpg')}
        style={ImageBackgroundStyle}
      >
        <View style={containerStyle}>
          <View style={{ marginBottom: 40 }}>
            <Image source={require('../images/loginLogo.png')} style={logoStyle} />
          </View>
          <FormValidationMessage>{error}</FormValidationMessage>
          <View style={section}>
            <Input
              value={email}
              placeholder='Email Address'
              autoCapitalize='none'
              onChangeText={(value) => this.props.updateLogin({ prop: 'email', value })}
            />
          </View>
          <View style={section}>
            <Input
              value={password}
              placeholder='Password'
              autoCapitalize='none'
              onChangeText={(value) => this.props.updateLogin({ prop: 'password', value })}
            />
            <KeyboardSpacer />
          </View>
          <View style={section}>
            <Button
              loading={loading}
              fontSize={16}
              backgroundColor='#00aeef'
              onPress={() => this.props.attemptLogin(email, password)}
              containerViewStyle={{ width: 260 }}
              title='LOGIN'
            />
          </View>
          <View style={{ flexDirection: 'row', width: 260, justifyContent: 'space-between' }}>
            <Text style={{ color: '#fff' }}>
              Forgot Password?
            </Text>
            <Text style={{ color: '#fff' }}>
              Sign Up
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  ImageBackgroundStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  containerStyle: {
     justifyContent: 'center',
     alignItems: 'center',
  },
  logoStyle: {
     width: 180,
     height: 70
  },
  section: {
    marginBottom: 20
  }
};

const mapStateToProps = (state) => {
  const { email, password, loading, error, success } = state.login;
  console.log(state.login);
  // console.log(state);
  return { email, password, loading, error, success };
};

export default connect(mapStateToProps, { updateLogin, attemptLogin })(Login);
