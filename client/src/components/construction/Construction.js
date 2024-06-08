import React, { useState, useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import Image1 from '../../components/navbar/icons/building.jpg';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap';
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
                <h1>17Columns Construction and Interiors</h1>
                <p>Your trusted partner in building and design excellence</p>
                <button className="learn-more-btn">
                  Learn More <FiArrowRight />
                </button>
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
