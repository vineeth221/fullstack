import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './Store'; // Import your Redux store
import './components/index.css';
import App from './components/App'; // Your root component

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
