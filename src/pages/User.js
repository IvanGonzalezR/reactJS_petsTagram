import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setIsAuth } from '../slices/basicSlice'


const User = () => {
  // Obteniendo el valor del store
  const value = useSelector((state) => state.isAuth, shallowEqual);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    // Haciendo dispatch de la acción
    dispatch(setIsAuth(!value));
  }
  return (
    <>
      <div>valor: {value.toString()}</div>
      <button onClick={handleOnclick}>Change isAuth</button>
    </>
  )
}

export { User };
