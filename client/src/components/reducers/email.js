// src/reducers/email.js

import * as actionTypes from '../types/actionTypes';

const initialState = {
  loading: false,
  success: false,
  error: null,
  showModal: false,
  notifications: [],
  isLoading: false
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
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
      case actionTypes.START_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case actionTypes.STOP_LOADING:
        return {
          ...state,
          isLoading: false
        };
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((notif) => notif.id !== action.payload),
      };
    default:
      return state;
  }
};

export default emailReducer;
