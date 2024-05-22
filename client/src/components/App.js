import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './landing/home';
import ContactUs from './contact/ContactUs';
import Blog from './blogs/blog';
import AboutUs from './about/AboutUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
};

export default App;
