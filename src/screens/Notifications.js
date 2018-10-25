import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NotificationList } from './common';

class Notifications extends Component {
  render() {
    return (
      <ScrollView>
        <NotificationList
          notifications={this.props.notifications}
          onPress={(val) => console.log(val)}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { notifications } = state;
  return { notifications };
};

export default connect(mapStateToProps)(Notifications);
