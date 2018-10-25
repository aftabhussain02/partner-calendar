import React from 'react';
import _ from 'lodash';
import { List, ListItem } from 'react-native-elements';


export const NotificationList = ({ notifications, onPress }) => {
  console.log(notifications);
  const { listItemStyle, listContainerStyle } = styles;
  return (
    <List containerStyle={listContainerStyle}>
    {
      _.map(notifications, (val, notificaitonId) => {
        // const time = timeSince(val.date);
        // console.log(`${ApiUrl}/storage/${val.picture}`);
        return (
          <ListItem
          key={notificaitonId}
          title={val.title}
          containerStyle={listItemStyle}
          // avatar={`${ApiUrl}/storage/${val.picture}`}
          onPress={() => onPress(val)}
          hideChevron
          roundAvatar
          rightTitle='2 min'
          // onSwitch={() => console.log('switched man how you did it')}
          />
      );
      })
    }
  </List>
);
};


const styles = {
  listItemStyle: {
     marginBottom: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 4,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  listContainerStyle: {
    backgroundColor: '#E9E9EF',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,

  }
};
