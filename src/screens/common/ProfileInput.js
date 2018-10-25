import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { TextInput, View, Text } from 'react-native';

export class ProfileInput extends Component {
  state = {
    isFocused: false
  }

  render() {
    const { isFocused } = this.state;
    const { onChangeText, placeholder, value, icon, label, keyboardType } = this.props;
    const { containerStyle, inputStyle, isFocusedStyle } = styles;
    return (
      <View
        style={containerStyle}
      >
        <View style={{ width: '80%', marginLeft: '20%', flexDirection: 'row' }}>
          <Text style={{ color: isFocused ? '#11132E' : '#ABB3B8', alignSelf: 'flex-start' }}>
            {label}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Icon
            name={icon}
            color={isFocused ? '#11132E' : '#ABB3B8'}
            containerStyle={{ width: '20%', alignSelf: 'center' }}
          />
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            placeholder={placeholder}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            value={value}
            style={[inputStyle, isFocused ? isFocusedStyle : null]}
            autoCorrect={false}
            placeholderTextColor='#3d3d3d'
            underlineColorAndroid='transparent'
            keyboardType={keyboardType}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    width: '100%',
    // flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'flex-end',
    // borderRadius: 4,
  },
  inputStyle: {
    width: '80%',
    padding: 2,
    color: '#3d3d3d',
    borderBottomWidth: 2,
    borderColor: '#ABB3B8',
    fontFamily: 'Roboto',
    fontSize: 14
  },
  isFocusedStyle: {
    borderColor: '#11132E',
  }
};
