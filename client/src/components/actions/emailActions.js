// src/components/actions/emailActions.js

export const sendEmail = (emailData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SEND_EMAIL_REQUEST' });

      const res = await fetch('http://localhost:8006/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (res.status === 201) {
        dispatch({ type: 'SEND_EMAIL_SUCCESS', payload: data });
      } else {
        dispatch({ type: 'SEND_EMAIL_FAILURE', payload: data.error });
      }
    } catch (error) {
      console.error('Network error:', error);
      dispatch({ type: 'SEND_EMAIL_FAILURE', payload: 'Network error' });
    }
  };
};
