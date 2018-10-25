import React from 'react';
import { View, Text } from 'react-native';

export const CardSectionColumn = ({ heading, subHeading }) => {
  const { titleStyle, descriptionStyle } = styles;
  return (
    <View>
      <Text style={titleStyle}>
        {heading}
      </Text>
      <Text style={descriptionStyle}>
        {subHeading}
      </Text>
    </View>
  );
};

const styles = {
  titleStyle: {
    color: '#bcbcbc',
    fontSize: 12
  },
  descriptionStyle: {
    color: '#333',
    fontSize: 14
  },
};
