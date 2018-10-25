import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export const Footer = ({ total, onPress }) => {
  const { footerContainer, totalContainerStyle } = styles;
  return (
    <View style={footerContainer}>
      <View style={totalContainerStyle}>
        <Text style={{ color: '#bcbcbc' }}>
          Total
        </Text>
        <Text>
          -
        </Text>
        <Text>
          &#8377; {total}
        </Text>
      </View>
      <Button
        color='#fff'
        backgroundColor='#00aeef'
        containerViewStyle={{ width: '100%', paddingBottom: 10 }}
        title='Confirm'
        onPress={() => onPress()}
      />
    </View>
  );
};

const styles = {
  footerContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderColor: '#00aeef',
    borderTopWidth: 4
  },
  totalContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 10
  }
};
