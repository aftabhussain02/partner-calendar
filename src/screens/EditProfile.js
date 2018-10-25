import React, { PureComponent } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { Icon, Button } from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import _ from 'lodash';
import { updateEditProfile, submitUpdateProfile } from '../actions';
import { ProfileInput } from './common';

class EditProfile extends PureComponent {
  componentDidMount() {
    // _.map(this.props.profile, (value, prop) => {
    //   this.props.updateEditProfile({ prop, value });
    // });
    _.map(this.props.profile.profile, (value, prop) => {
      this.props.updateEditProfile({ prop, value });
    });
  }

   changePicture() {
       ImagePicker.launchImageLibraryAsync({
       mediaTypes: 'Images',
       allowsEditing: true,
       aspect: [1, 1],
       base64: true
     })
     .then(image => {
       if (!image.cancelled) {
       this.props.updateEditProfile({
         prop: 'profile_picture',
         value: `data:image/png;base64,${image.base64}` });
       }
     })
     .catch(err => console.log(err));
 }

  render() {
    const {
      containerStyle,
      profileStyle,
      profileContainerStyle,
      editProfileIconStyle,
      section
     } = styles;

   const {
     gov_id: govId,
     profile_picture: profilePicture,
     name,
     contact,
     alternative_contact: alternativeContact,
     address
   } = this.props.editProfile;

console.log(this.state);
    return (
        <ScrollView
          keyboardShouldPersistTaps='always'
          contentContainerStyle={containerStyle}
        >
          {/* <TouchableHighlight
            style={backIconContainerStyle}
            onPress={() => this.props.navigation.goBack()}
            underlayColor='#fff'
          >
            <Icon
              name='arrow-back'
              color='#fff'
              // onPress={() => this.props.navigation.goBack()}
              size={24}

              // containerStyle={}
            />
          </TouchableHighlight> */}
          <View
            style={{
          marginTop: 20,
          marginBottom: 20
        }}>
          <View style={profileContainerStyle}>
            <Icon
              name='edit'
              color="#fff"
              containerStyle={editProfileIconStyle}
              onPress={() => this.changePicture()}
            />
            <Image
              source={require('../images/defaultProfile.jpg')}
              style={profileStyle}
            />
          </View>
          <View style={section}>

            <ProfileInput
              placeholder='Jone Doe'
              onChangeText={(value) => this.props.updateEditProfile({ prop: 'name', value })}
              value={name}
              icon='account-circle'
              label='Full Name'
            />
          </View>
          <View style={section}>
            <ProfileInput
              placeholder='Gov Id'
              onChangeText={(value) => this.props.updateEditProfile({ prop: 'gov_id', value })}
              value={govId}
              icon='credit-card'
              label='Goverment Id'
            />
          </View>
          <View style={section}>
            <ProfileInput
              placeholder='#1, fivesplash, udaipur'
              onChangeText={(value) => this.props.updateEditProfile({ prop: 'address', value })}
              value={address}
              icon='edit-location'
              label='Address'
            />
          </View>
          <View style={section}>
            <ProfileInput
              placeholder='XXXXXXXXX'
              onChangeText={(value) => this.props.updateEditProfile({ prop: 'contact', value })}
              value={contact.toString()}
              keyboardType='numeric'
              icon='phone'
              label='Contact'
            />
          </View>
          <View style={section}>
            <ProfileInput
              placeholder='XXXXXXXXX'
              onChangeText={(value) => this.props.updateEditProfile({
                prop: 'alternative_contact',
                value })}
              value={alternativeContact.toString()}
              keyboardType='numeric'
              icon='contact-phone'
              label='Alternative Contact'
            />
          </View>

          <View style={section}>
            <Button
              fontSize={16}
              backgroundColor='#00aeef'
              onPress={() => this.props.submitUpdateProfile(this.props.editProfile)}
              containerViewStyle={{ width: 260 }}
              title='Save'
            />
          </View>
          <Button
            fontSize={16}
            backgroundColor='white'
            onPress={() => this.props.navigation.navigate('Logout')}
            containerViewStyle={{ width: 260 }}
            // buttonStyle={{ color: '#333' }}
            color="#333"
            title='Logout'
          />
          <KeyboardSpacer />
          </View>
        </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
     justifyContent: 'center',
     alignItems: 'center',
  },
  profileStyle: {
     width: 100,
     height: 100,
     borderRadius: 100,
     borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  profileContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  editProfileIconStyle: {
    padding: 5,
    backgroundColor: '#00aeef',
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0
  },
  section: {
    marginBottom: 15
  },
  backIconContainerStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 10
  }
};

const mapStateToProps = state => {
  const { profile, editProfile } = state.user;
    // console.log(editProfile);
  return { profile, editProfile };
};

export default connect(mapStateToProps, { updateEditProfile, submitUpdateProfile })(EditProfile);
