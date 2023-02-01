import React from 'react';

const useInputValue = (initialValue) => {
  const [ value, setValue ] = React.useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return {
    value,
    onChange,
  }
};

export { useInputValue };