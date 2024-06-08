import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './landing/home';
import ContactUs from './contact/ContactUs';
import Blog from './blogs/blog';
import AboutUs from './about/AboutUs';
import Construction from './construction/Construction';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/construction" element={<Construction/>} />
      </Routes>
    </Router>
  );
};

export default App;
