import React from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import IconBadge from 'react-native-icon-badge';
import Login from '../screens/Login';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import CalendarScreen from '../screens/CalendarScreen';
import EditProfile from '../screens/EditProfile';
import EditDay from '../screens/EditDay';
import Logout from '../screens/Logout';
import EventList from '../screens/EventList';
import Notifications from '../screens/Notifications';
import ConfirmBooking from '../screens/ConfirmBooking';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

const AuthLoadingStack = createStackNavigator({
  AuthLoadingScreen: {
    screen: AuthLoadingScreen,
    navigationOptions: {
      header: null
    }
  }
});

const CalendarStack = createStackNavigator({
  // Booking: BookingStack,
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Calender',
      headerRight: (
        <ProfileIcon navigation={navigation} />
      )
    })
  },
  EditDay: {
    screen: EditDay,
    navigationOptions: {
      headerTitle: 'Set Availability'
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Profile',
      headerLeft: (
        <BackButton navigation={navigation} />
      )
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: null
    }
  }
});

CalendarStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const EventStack = createStackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Calender',
      headerRight: (
        <ProfileIcon navigation={navigation} />
      )
    })
  },
  ConfirmBooking: {
    screen: ConfirmBooking,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Confirm Booking',
      headerLeft: (
        <BackButton navigation={navigation} />
      )
    })
  }
});


EventStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const NotificationStack = createStackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Notifications',
      headerRight: (
        <ProfileIcon navigation={navigation} />
      )
    })
  }
});

const TestStack = createStackNavigator({
  test: {
    screen: ConfirmBooking
  }
});

const AppStack = createBottomTabNavigator(
  {
    test: TestStack,
    Calendar: CalendarStack,
    Schedule: EventStack,
    Notification: {
      screen: NotificationStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <IconBadge
            MainElement={<Icon name='notifications' size={25} color={tintColor} />}
            BadgeElement={<Text style={{ color: 'white', fontSize: 8 }}>{10}</Text>}
            IconBadgeStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: 'red'
              }}
            // // Hidden={0}
            Hidden={false}
          />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Calendar') {
          iconName = 'perm-contact-calendar';
        } else if (routeName === 'Schedule') {
          iconName = 'event-note';
        // } else if (routeName === 'Notification') {
        //   iconName = 'notifications';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00aeef',
      inactiveTintColor: 'gray',
    }
  }
);

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    AuthLoading: AuthLoadingStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const ProfileIcon = ({ navigation }) => (

  <TouchableNativeFeedback
    onPress={() => navigation.navigate('EditProfile')}
  >
    <Icon
      name='account-circle'
      color='#333'
      size={30}
      containerStyle={{ paddingRight: 20, paddingLeft: 10, height: '100%' }}
    />
  </TouchableNativeFeedback>
);

const BackButton = ({ navigation }) => (
    <TouchableNativeFeedback
      onPress={() => navigation.goBack()}
    >
      <Icon
        name='arrow-back'
        containerStyle={{ paddingRight: 20, paddingLeft: 10, height: '100%' }}
      />
    </TouchableNativeFeedback>
);
