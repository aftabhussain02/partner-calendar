import React from 'react';
import { View, Modal, Text } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

export const PermissionModal = ({
  onAccept,
  onReject,
  modalText,
  visible,
  headerTitle,
  imageSrc }) => {
  const {
    container,
    modalContainer,
    modalTextStyle,
    header,
    headerTitleStyle,
    buttonContainer,
    imageStyle,
    descriptionContainer } = styles;

  return (
        <Modal
           animationType="slide"
           transparent
           visible={visible}
           onRequestClose={() => {}}
        >
          <View style={container}>
            <View style={modalContainer}>
              <View style={header}>
                <Text style={headerTitleStyle}>{headerTitle}</Text>
              </View>
              <View style={descriptionContainer}>
                <Avatar
                  small
                  rounded
                  source={require('../../images/notificationImage.png')}
                  containerStyle={imageStyle}
                />
                <Text style={modalTextStyle}>{modalText}</Text>
              </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Button
                    onPress={onAccept}
                    title='Open'
                    backgroundColor='#00aeef'
                    icon={{ name: 'check' }}
                    containerViewStyle={buttonContainer}
                  />
                  <Button
                    onPress={onReject}
                    title='Close'
                    icon={{ name: 'close', color: '#615A36' }}
                    backgroundColor='#F2F4F5'
                    color='#615A36'
                    containerViewStyle={buttonContainer}
                  />
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
    margin: 0
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  modalTextStyle: {
    fontSize: 14,
    // paddingRight: 10,
    // paddingLeft: 10,
    width: '70%'
  },
  buttonContainer: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    width: '50%'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#F2F4F5',
    color: '#333',
    padding: 15,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  imageStyle: {
    alignSelf: 'center',
    marginRight: 20
  },
  descriptionContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
