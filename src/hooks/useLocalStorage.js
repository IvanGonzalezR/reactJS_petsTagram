import React from 'react';

function useLocalStorage(key, initialValue) {
  // inicializar el estado general
  const [ storedValue, setStoredValue ] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    }
    catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // actualizar el estado general
  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [ storedValue, setLocalStorage ];
};

export { useLocalStorage };