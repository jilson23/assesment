export const secondsToString = (seconds) => {
  let hour = Math.floor(seconds / 3600);
  hour = hour < 10 ? `0${hour}` : hour;
  let minute = Math.floor((seconds / 60) % 60);
  minute = minute < 10 ? `0${minute}` : minute;
  let second = seconds % 60;
  second = second < 10 ? `0${second}` : second;
  return `${hour}:${minute}:${second}`;
};

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
