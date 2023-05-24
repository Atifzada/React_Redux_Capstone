import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
// import detailsReducer from './detailSlice';

const reducer = combineReducers({
  crypto: cryptoReducer,
  // details: detailsReducer,
});

const store = configureStore({ reducer });

export default store;
