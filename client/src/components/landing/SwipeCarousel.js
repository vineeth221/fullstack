import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <div className="relative bg-neutral-950 py-8 px-4 h-[400px] md:h-[80vh]">
        <div className="relative w-full h-full">
          <img
            src={build12}
            alt="Interior"
            className="object-cover w-full h-full rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-xl"></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-between items-center p-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={TEXT_ANIMATION}
              className="text-white w-full md:w-1/2 mb-4 md:mb-0"
            >
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
        <div className="bg-neutral-950 py-8 px-4">
          <NewContact />
        </div>
      )}
    </div>
  );
};

export default SingleImageWithTextAndContact;
