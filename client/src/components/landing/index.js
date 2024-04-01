import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ShuffleHero from '../../components/landing/ShuffleHero';
import SwipeCarousel from '../../components/landing/SwipeCarousel';
import CountUpStats from '../../components/landing/CountUpStats';
import Testimonials from '../../components/landing/Testimonials';
// import VideoPlayer from '../../components/landing/VideoPlayer';
import Footer from '../../components/landing/Footer';
import Loader from '../loader/Loader';
import './index.css';

const Index = () => {
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
            {/* <VideoPlayer /> */}
            <Testimonials />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
