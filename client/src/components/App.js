import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './landing/index';
import ContactUs from './contact/ContactUs';
import AboutUs from './about/AboutUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/index" element={<Index />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
