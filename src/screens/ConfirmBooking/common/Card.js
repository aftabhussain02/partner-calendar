import React from 'react';
import { View } from 'react-native';

export const Card = ({ children }) => {
  const { container } = styles;

  return (
    <View style={container}>
      {children}
    </View>
  );
};

const styles = {
    container: {
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      borderRadius: 2,
      // marginBottom: 20,
      width: '96%',
      alignSelf: 'center'
    }
};
