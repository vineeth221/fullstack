import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import ShuffleHero from './ShuffleHero';
import SwipeCarousel from './SwipeCarousel';
import CountUpStats from './CountUpStats';
import Testimonials from './Testimonials';
import PackageSelector from './packageSelector';
import Faqs from './faqs';
import ConstructionCalculator from './ConstructionCalculator';
// import VideoPlayer from '../../components/landing/VideoPlayer';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Loader from '../loader/Loader';
import WhatsAppIcon from './WhatsAppIcon';
import './index.css';

const Home = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const location = useLocation();
  const [showPackages, setShowPackages] = useState(true);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('showPackages') === 'true') {
      setShowPackages(true);
      scrollToPackages();
    }
    setIsLoadingContent(false);
  }, [location.search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingContent(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('package-details');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
            {/* <ShuffleHero /> */}
            <WhatsAppIcon />
            {showPackages && <PackageSelector />}
            {/* <VideoPlayer /> */}
            <Testimonials />
            <ConstructionCalculator />
            <Faqs/>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
