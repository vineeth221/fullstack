// src/components/actions/emailActions.js

export const sendEmail = (emailData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SEND_EMAIL_REQUEST' });

      // Use relative path here since you have set up a proxy in package.json
      const res = await fetch('http://43.204.231.33:8004/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (res.status === 204) {  // Check for the appropriate status code (204 for success)
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
