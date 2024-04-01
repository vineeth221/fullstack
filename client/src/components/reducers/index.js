// src/reducers/index.js

import { combineReducers } from 'redux';
import emailReducer from './email';
 // Create this file in the next step

const rootReducer = combineReducers({
  email: emailReducer,
});

export default rootReducer;