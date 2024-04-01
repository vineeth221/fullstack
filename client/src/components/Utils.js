// utils.js

export const generateRandomNotif = (text) => {
    const data = {
      id: Math.random(),
      text: text,
    };
  
    return data;
  };
  