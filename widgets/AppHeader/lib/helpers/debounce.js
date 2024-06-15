export const debounce = (callback, delay) => {
  let myTimeout;
  return () => {
    clearTimeout(myTimeout);
    myTimeout = setTimeout(() => {
      callback();
    }, delay);
  };
};
