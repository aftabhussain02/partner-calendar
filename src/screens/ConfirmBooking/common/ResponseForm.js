import React from 'react';
import { View, Modal, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { ProfileInput } from '../../common';


export const ResponseForm = ({ visible, name, number, onPress }) => {
  const { container, modalContainer, modalTextContainer } = styles;

  return (
    <Modal
       animationType="slide"
       transparent
       visible={visible}
       onRequestClose={() => {}}
    >
      <View style={container}>
        <View style={modalContainer}>
            <Icon
              raised
              name='error'
              color='#fff'
              size={30}
              containerStyle={{
                position: 'absolute',
                zIndex: 2,
                borderRadius: 40,
                marginBottom: 30,
                top: 0,
                backgroundColor: '#eacf00'
              }}
            />
          <View style={modalTextContainer}>
          <Text style={{ fontSize: 16 }}>Please Fill Bellow Fields.</Text>
          <View style={{ paddingTop: 20, width: '70%' }}>
            <ProfileInput
              placeholder='Full Name'
              label='Full Name'
              onChangeText={(value) => console.log(value)}
              value={name}
              icon='account-circle'
            />
          </View>

          <View style={{ paddingTop: 20, width: '70%' }}>
            <ProfileInput
              placeholder='+91-XXXXXXXXXX'
              label='Contact Number'
              onChangeText={(value) => console.log(value)}
              value={number}
              icon='phone'
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Button
              onPress={() => onPress()}
              backgroundColor='#eacf00'
              containerViewStyle={{ width: '90%' }}
              title='Submit'
              borderRadius={3}
              small
              raised
            />
          </View>
        </View>
      </View>
    </View>
    </Modal>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 4,
    width: 260
  },
  modalTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 60,
      paddingBottom: 20,
      marginRight: 20,
      marginLeft: 20,
      backgroundColor: '#fff',
      borderRadius: 4,
      width: '100%'
  },
  modalTextStyle: {
    fontSize: 14,
    padding: 15,
    paddingBottom: 25,
    color: '#969696'
  }
};
