import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image1 from '../../components/navbar/icons/building.jpg';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Loader from '../loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/landing/Footer';
import NewBlog from '../../components/blogs/newBlog';
import '../landing/index.css'

const COLORS_TOP = ["#3f97d2"];

export const Construction = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingContent(false);
    }, 2000);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      {isLoadingContent ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="image-container">
            <img src={Image1} alt="17Columns Construction and Interiors" className="background-image" />
            <div className="overlay">
              <div className="overlay-content">
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                Construct Your Dream Home.
              </h1>
              <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
               800+ families trusted us with building their homes
              </p>
              <motion.button
                style={{
                  border,
                  boxShadow,
                }}
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
              >
                Learn More
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </motion.button>
              </div>
              </div>
            </div>
          </div>
          <div className="small-space" />
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    Platform Showcase
                </p>
                <div className="underline" />
            </div>
          <div className="small-space" />
          <NewBlog/>
          <Footer />
        </>
      )}
    </>
  );
};

export default Construction;
