export const isLocationsCorrect = (locations) => {
  return locations.length > 0 && locations.length <= 2;
};

export const isEmailCorrect = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isNickCorrect = (nick) => {
  return nick.length >= 2 && nick.length <= 10;
};
