import React from 'react';
import { View, Text } from 'react-native';

export const CardHeader = ({ text }) => {
  const { container, textStyle } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>
        {text}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // alignText: 'center'
  },
  textStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
    // borderBottomWidth: 1,
    // borderColor: '#ddd',
    padding: 10,
    // selfAlign: 'center'
  }
};
