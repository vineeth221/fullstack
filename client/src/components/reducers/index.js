// src/reducers/index.js

import { combineReducers } from 'redux';
import emailReducer from './email'; // Create this file in the next step

const rootReducer = combineReducers({
  email: emailReducer,
  // Add other reducers if needed
});

export default rootReducer;