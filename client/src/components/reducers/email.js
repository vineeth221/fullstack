// src/reducers/email.js

import * as actionTypes from '../types/actionTypes';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case actionTypes.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case actionTypes.SEND_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default emailReducer;