import thunk from 'redux-thunk'
import { compose, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import basicSliceReducer from './slices/basicSlice';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(
  applyMiddleware(thunk)
);

const store = configureStore(
  // Ya no uso produce porque Redux Toolkit ya usa immer
  // produce,
  // combineReducers recibe un objeto con los reducers
  // combineReducers(
  //   {
  //     basicSlice: basicSliceReducer,
  //     anotherSlice: anotherSliceReducer
  //   }
  // ),

  //uso de un unico reducer (TIENE QUE LLAMARSE REDUCER)
  {
    reducer: basicSliceReducer,
  },

  composedEnhancers
);

export { store };