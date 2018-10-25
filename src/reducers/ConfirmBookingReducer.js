import { CONFIRM_BOOKING_UPDATE } from '../actions/types';

const initState = {
  "bookingAssignId": 16,
    "bookingId": "101212",
    "bookingTime": "10-07-2017",
    "bookingType": "vehicleChaufferOrg",
    "city": "Udaipur",
    "contactNumber": "8000080000",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "language": "Hindi",
    "license": "Something",
    "name": "Jon Doe",
    "nationality": "Indian",
    "time": "4:00 hours",
    "total": "9999",
    "userId": "1",
};

export default (state = initState, action) => {
  switch (action.type) {
    case CONFIRM_BOOKING_UPDATE:
      return action.payload;
    default:
      return state;
  }
};
