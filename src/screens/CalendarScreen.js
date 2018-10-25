import React, { Component } from 'react';
import { Notifications } from 'expo';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { connect } from 'react-redux';
import { fetchNotifications, updateConfirmBooking } from '../actions';
import registerForPushNotificationsAsync from '../development/notification';
import { PermissionModal } from './common';


class CalendarScreen extends Component {
  state = {
    modalVisible: false
  }

  componentDidMount() {
    this.props.fetchNotifications(this.props.profile.id);

    registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(
      this._handleNotification.bind(this)
    );
  }

  _handleNotification(notification) {
    this.setState({
      modalVisible: true
    });
    this.props.updateConfirmBooking(notification.data);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Calendar
          onDayPress={() => this.props.navigation.navigate('EditDay')}
        />
        <PermissionModal
          headerTitle='New Booking'
          visible={this.state.modalVisible}
          modalText='booking desription'
          onAccept={() => {
            this.setState({ modalVisible: false });
            this.props.navigation.navigate('ConfirmBooking');
          }}
          onReject={() => this.setState({ modalVisible: false })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { profile } = state.user;
  return { profile };
};

export default connect(mapStateToProps, { fetchNotifications, updateConfirmBooking })(CalendarScreen);
