import React from 'react';
import { View } from 'react-native';

export const CardSection = ({ children }) => {
  const { container } = styles;
  return (
    <View style={container}>
      {children}
    </View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#fff'
  }
};
