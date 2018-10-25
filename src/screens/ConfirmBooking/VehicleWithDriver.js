import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
// import { Button } from 'react-native-elements';
import {
  Card,
  CardSection,
  CardHeader,
  CardSectionColumn,
  Footer
 } from './common';

class Guide extends Component {
  render() {
     const {
       bookingId,
       bookingTime,
       bookingType,
       name,
       contactNumber,
       language
     } = this.props.booking;

    return (
      <View style={{ flex: 1, marginTop: 10 }}>
      <ScrollView>
        <Card>
          <CardHeader text='Booking Detail' />
          <CardSection>
            <CardSectionColumn heading='Booking Id' subHeading={bookingId} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Booking Time' subHeading={bookingTime} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Booking Type' subHeading={bookingType} />
          </CardSection>
        </Card>
        <Card>
          <CardHeader text='Customer Detail' />
          <CardSection>
            <CardSectionColumn heading='Name' subHeading={name} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Contant Number' subHeading={contactNumber} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Language' subHeading={language} />
          </CardSection>
        </Card>
      </ScrollView>
      <Footer
        total='9999'
        onPress={() => console.log('hey')}
      />
    </View>
    );
  }
}

export default Guide;
