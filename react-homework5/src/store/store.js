import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';


const reducer = combineReducers({
  carReducer,
  userReducer,
  postReducer
});

export const store = configureStore({
  reducer
});

