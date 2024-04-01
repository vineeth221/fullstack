
import { 
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION ,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  START_LOADING, 
  STOP_LOADING 
} from '../types/actionTypes';
import { generateRandomNotif } from '../../components/Utils';

export const showModal = () => ({
type: SHOW_MODAL,
});

export const hideModal = () => ({
type: HIDE_MODAL,
});

export const addNotification = (notification) => ({
type: ADD_NOTIFICATION,
payload: notification,
});

export const removeNotification = (id) => ({
type: REMOVE_NOTIFICATION,
payload: id,
});

export const sendEmailSuccess = () => ({
type: SEND_EMAIL_SUCCESS,
});

export const sendEmailFail = () => ({
type: SEND_EMAIL_FAILURE,
});

export const startLoading = () => {
  return {
    type: START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING
  };
};


export const sendEmail = (emailData) => {
return async (dispatch) => {
  try {
    dispatch({ type: SEND_EMAIL_REQUEST });
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (res.status === 204) {  
      dispatch(sendEmailSuccess());
      dispatch(showModal(true));
    } else {
      dispatch(sendEmailFail());
      dispatch(hideModal());
      // dispatch(addNotification(generateRandomNotif('Failed to send email. Please try again later.')))
    }
  } catch (error) {
    console.error('Network error:', error);
    dispatch(sendEmailFail());
    dispatch(hideModal());
    dispatch(addNotification(generateRandomNotif('Failed to send email. Please try again later.')));
  }
};
};