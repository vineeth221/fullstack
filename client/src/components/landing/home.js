import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import ShuffleHero from './ShuffleHero';
import SwipeCarousel from './SwipeCarousel';
import CountUpStats from './CountUpStats';
import Testimonials from './Testimonials';
import Faqs from './faqs';
// import ConstructionCalculator from './ConstructionCalculator';
// import VideoPlayer from '../../components/landing/VideoPlayer';
import Footer from './Footer';
import Loader from '../loader/Loader';
import WhatsAppIcon from './WhatsAppIcon';
import './index.css';

const Home = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoadingContent ? (
        <Loader />
      ) : (
        <>
          <div>
            <Navbar />
            <SwipeCarousel />
            <CountUpStats />
            <ShuffleHero />
            <WhatsAppIcon />
            {/* <VideoPlayer /> */}
            {/* <ConstructionCalculator /> */}
            <Testimonials />
            <Faqs/>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
