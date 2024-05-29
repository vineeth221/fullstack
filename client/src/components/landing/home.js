import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import ShuffleHero from './ShuffleHero';
import SwipeCarousel from './SwipeCarousel';
import CountUpStats from './CountUpStats';
import Testimonials from './Testimonials';
// import VideoPlayer from '../../components/landing/VideoPlayer';
import Footer from './Footer';
import Loader from '../loader/Loader';
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
            {/* <VideoPlayer /> */}
            <Testimonials />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;