import { CONFIRM_BOOKING_UPDATE } from './types';

export const updateConfirmBooking = (booking) => ({
  type: CONFIRM_BOOKING_UPDATE,
  payload: booking
});
