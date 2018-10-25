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
       language,
       total,
       time,
       nationality,
       city,
       description
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
          <CardSection>
            <CardSectionColumn heading='Nationality' subHeading={nationality} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='City' subHeading={city} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Preferred Language' subHeading={language} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Time' subHeading={time} />
          </CardSection>
          <CardSection>
            <CardSectionColumn heading='Description' subHeading={description} />
          </CardSection>
        </Card>
      </ScrollView>
      <Footer
        total={total}
        onPress={() => this.props.onPress()}
      />
    </View>
    );
  }
}

export default Guide;
