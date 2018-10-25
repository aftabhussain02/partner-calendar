import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Guide from './ConfirmBooking/Guide';
import { SuccessModal } from './common';
import VehicleWithDriverOrg from './ConfirmBooking/VehicleWithDriverOrg';
import { ResponseForm } from './ConfirmBooking/common';
// import { Button } from 'react-native-elements';
// import { Card, CardSection, CardHeader } from './common';
// import { Connect } from 'react-redux';

class ConfirmBooking extends Component {
  state = {
    success: false,
    responseFormOpen: false
  }

  switchBookingComponent() {
      switch (this.props.confirmBooking.bookingType) {
        case 'guide':
          return <Guide booking={this.props.confirmBooking} onPress={() => this.vehicleOrgConfirm()} />;
        case 'vehicleChaufferOrg':
          return (
            <VehicleWithDriverOrg
              booking={this.props.confirmBooking}
              onPress={() => this.vehicleOrgConfirm()}
            />
          );
        default:
          return <View />;
      }
  }

  guideConfirm() {
    this.setState({
      success: true
    });
  }

  vehicleOrgConfirm() {
    this.setState({
      responseFormOpen: true
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.switchBookingComponent()}
        <SuccessModal
          onPress={() => this.setState({ success: false })} visible={this.state.success}
          text='Booking Confirmed Succesfully'
        />
        <ResponseForm
          visible={this.state.responseFormOpen}
          onPress={() => this.setState({ responseFormOpen: false, success: true })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { confirmBooking } = state;
  console.log(confirmBooking);
  return { confirmBooking };
};

export default connect(mapStateToProps)(ConfirmBooking);
