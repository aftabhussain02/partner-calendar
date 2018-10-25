export * from './StyleSheet';
export const ApiUrl = 'http://192.168.42.83/partner-calendar/public/';
export const Headers = (userToken) => ({
      Accept: 'application/json',
      Authorization: userToken
    });
