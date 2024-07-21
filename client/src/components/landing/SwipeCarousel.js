import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaTruck, FaTools } from 'react-icons/fa';
import build12 from '../../components/navbar/icons/build2.jpeg';
import NewContact from '../../components/contact/NewContact';

const TEXT_ANIMATION = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const SingleImageWithTextAndContact = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="relative bg-neutral-950 py-3 px-3 h-[400px] md:h-[80vh]">
        <div className="relative w-full h-full">
          <img
            src={build12}
            alt="Interior"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-black/90 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between items-center p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={TEXT_ANIMATION}
              className={`text-white w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-start space-y-6 px-4 ${isSmallScreen ? 'text-center text-white' : ''}`}
            >
              <h2 className={`text-lg md:text-4xl font-semibold ${isSmallScreen ? 'text-white' : 'text-white-400'} mt-3`}>
                Transform Your Space with Expert Interiors
              </h2>
              <p className={`text-sm md:text-base ${isSmallScreen ? 'text-gray-100' : 'text-gray-300'}`}>
                Our team specializes in creating stunning interiors that reflect your style and functionality needs.
              </p>
              <div className="flex flex-wrap justify-start gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <FaTruck className={`text-orange-500 ${isSmallScreen ? 'text-2xl' : 'text-4xl'}`} />
                  <span className={`text-sm ${isSmallScreen ? 'text-gray-100' : 'text-gray-200'} mt-2`}>On Time</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaHome className={`text-blue-500 ${isSmallScreen ? 'text-2xl' : 'text-4xl'}`} />
                  <span className={`text-sm ${isSmallScreen ? 'text-gray-100' : 'text-gray-200'} mt-2`}>Home</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaTools className={`text-green-500 ${isSmallScreen ? 'text-2xl' : 'text-4xl'}`} />
                  <span className={`text-sm ${isSmallScreen ? 'text-gray-100' : 'text-gray-200'} mt-2`}>Quality</span>
                </div>
              </div>
            </motion.div>
            {!isSmallScreen && (
              <div className="w-full md:w-1/2">
                <NewContact />
              </div>
            )}
          </div>
        </div>
      </div>
      {isSmallScreen && (
        <div className="py-8 px-4">
          <NewContact />
        </div>
      )}
    </div>
  );
};

export default SingleImageWithTextAndContact;
