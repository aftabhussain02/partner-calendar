import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { Button } from 'react-native-elements';
// import { ProfileInput } from './common';

class EditDay extends Component {
  state = {
    availability: ''
  }
  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Picker
          selectedValue={this.state.availability}
          style={{ height: 50, width: 260, marginBottom: 20, marginTop: 20 }}
          onValueChange={(value) => this.setState({ availability: value })}
        >
          <Picker.Item label='Availability is not set' value='notset' />
          <Picker.Item label='1st Half - upto 1pm' value="1st Half" />
          <Picker.Item label='2nd Half - after 2pm' value='2nd Half' />
          <Picker.Item label='Full Day' value='Full Day' />

        </Picker>
        <Button
          fontSize={16}
          backgroundColor='#00aeef'
          onPress={() => console.log('pressed')}
          containerViewStyle={{ width: 260 }}
          title='Save Availability'
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
      flex: 1,
      alignItems: 'center'
  }
};

export default EditDay;
