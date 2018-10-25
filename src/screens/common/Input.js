import React from 'react';
import { TextInput, View } from 'react-native';

export const Input = ({ onChangeText, placeholder, value, autoCapitalize }) => {
  const { containerStyle, inputStyle } = styles;
  return (
    <View
      style={containerStyle}
    >
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
        autoCorrect={false}
        placeholderTextColor='#fff'
        underlineColorAndroid='transparent'
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    borderRadius: 4,
  },
  inputStyle: {
    width: 260,
    padding: 6,
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 16
  }
};
