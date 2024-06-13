import React, { useState, useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
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
import Down from '../../components/navbar/icons/chevron-down.svg';
import VideoPlayer from '../landing/VideoPlayer';
import ShuffleHero from "../landing/ShuffleHero";

const COLORS_TOP = ["#3f97d2"];

export const Interiors = () => {
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [visibleAnswers, setVisibleAnswers] = useState({});
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

  const showAnswer = (ansId, headId) => {
    setVisibleAnswers(prevState => {
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === ansId ? !prevState[key] : false;
        return acc;
      }, {});
      return { ...updatedState, [ansId]: !prevState[ansId] };
    });
  };

  const isAnswerVisible = (ansId) => visibleAnswers[ansId];

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
          <motion.section
            style={{
              backgroundImage,
            }}
            className="relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                17 Columns is Custom Furniture Crafted for Your Style
              </h1>
              <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                17 Columns is a premium crafted house Furnishings and Decors to Add Personality to Your Home
              </p>
            </div>

            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={50} count={2500} factor={4} fade speed={2} />
              </Canvas>
            </div>
          </motion.section>

          <section className="px-4 py-12">
            <Container>
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4">Home <span style={{ color: "#3f97d2" }}>Interiors:</span></h2>
              <p className="mb-4 md:text-xl">
                17 Columns from House Of Vintage Realty offers premium Home Interiors in both design and quality front and help you personalise your dream home just the way it defines you. We do completely modular and Italian Home Interiors best suited to you and make your house feel like home.
              </p>
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> Modular and<span style={{ color: "#3f97d2" }}> Italian Home Interiors
                :</span></h2>
              <p className="mb-4 md:text-xl">
                Experience the elegance and functionality of modular and Italian home interiors. Our modular solutions are designed to optimize your space, providing you with innovative and efficient layouts that suit modern living. Italian designs bring a touch of sophistication and luxury, known for their craftsmanship, quality materials, and timeless appeal. Whether it’s a sleek, modern kitchen or a cozy, elegant living room, our interiors blend style with practicality.
              </p>
              <Row >
                <Col md={12}>
                  <h3 className="md:text-5xl sm:text-3xl text-2xl mb-4">Our Services</h3>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-1', 'head-1')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Interior Designing</div>
                      <img id="head-1" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-1') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-1') && (
                      <p id="ans-1" className="faq-item-ans">
                        Our team of Architects and Interior Designers help you design your home with our interior
                        designing services in customised and bespoke style in which it displays and communicate
                        your personality and tell your story.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-2', 'head-2')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Modular Kitchens</div>
                      <img id="head-2" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-2') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-2') && (
                      <p id="ans-2" className="faq-item-ans">
                        Kitchens plays a vital role in any home that’s the most used and most functional part of any
                        home in general, we help you design and deliver the most practical, functional and yet
                        aesthetically stunning kitchens.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-3', 'head-3')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Modular Interiors</div>
                      <img id="head-3" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-3') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-3') && (
                      <p id="ans-3" className="faq-item-ans">
                        Right from TV Units to wardrobes to sanity units to storage racks we design and deliver to
                        you in both carpentry and factory finished modular way. They not only look beautiful and
                        goes with the theme but very functional too.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-4', 'head-4')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Lighting</div>
                      <img id="head-4" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-4') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-4') && (
                      <p id="ans-4" className="faq-item-ans">
                        Lighting elevates the mood of the living spaces we help our beloved customers help them
                        with beautiful lighting solutions right from ambient lighting to warm lighting to decorative
                        lighting and magnify the look of the home.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-5', 'head-5')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Wall Decors</div>
                      <img id="head-5" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-5') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-5') && (
                      <p id="ans-5" className="faq-item-ans">
                        Decors are the most small yet detailed and complicated part of any home interiors which
                        covers curtains, wall decors and tiny piece of art which glorifies the look and mood of the
                        home and we are pioneers in delivering that.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-6', 'head-6')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Customised Home Furniture</div>
                      <img id="head-6" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-6') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-6') && (
                      <p id="ans-6" className="faq-item-ans">
                        Our designers help you design your furniture as well and then we get them manufactured
                        and deliver it to you. This is complete custom and bespoke furniture and not ready made.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-7', 'head-7')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Wardrobes</div>
                      <img id="head-7" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-7') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-7') && (
                      <p id="ans-7" className="faq-item-ans">
                        Stylish and functional wardrobes to maximize your storage space.
                      </p>
                    )}
                  </div>

                  <div className="faq-item-1 mb-6">
                    <h5 onClick={() => showAnswer('ans-8', 'head-8')} className="faq-item-heading-1">
                      <div style={{ maxWidth: '90%' }}>Furnishing & Decors</div>
                      <img id="head-8" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-8') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </h5>
                    {isAnswerVisible('ans-8') && (
                      <p id="ans-8" className="faq-item-ans">
                        Complete furnishing and decor solutions for a cohesive look.
                      </p>
                    )}
                  </div>
                </Col>
              </Row>

              <ShuffleHero />
            </Container>
          </section>
          <VideoPlayer />
          <div className="small-space" />
          <Container>
            <Row>
              <Col md={12}>
                <h3 className="md:text-5xl sm:text-3xl text-2xl mb-4">Our Process</h3>

                <div className="faq-item-1 mb-6">
                  <h5 onClick={() => showAnswer('ans-9', 'head-9')} className="faq-item-heading-1">
                    <div style={{ maxWidth: '90%' }}>Home Automation</div>
                    <img id="head-9" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-9') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </h5>
                  {isAnswerVisible('ans-9') && (
                    <p id="ans-9" className="faq-item-ans">
                      We help our customers with home automation as well depending on the requirement.
                    </p>
                  )}
                </div>

                <div className="faq-item-1 mb-6">
                  <h5 onClick={() => showAnswer('ans-10', 'head-10')} className="faq-item-heading-1">
                    <div style={{ maxWidth: '90%' }}>Themes</div>
                    <img id="head-10" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-10') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </h5>
                  {isAnswerVisible('ans-10') && (
                    <p id="ans-10" className="faq-item-ans">
                      Themes are the heart of any design and define the mood and personality of the home which
                      can be sophisticated luxury or natural or exposed or contemporary or even fusion. We are
                      pioneers in defining and designing and delivering themed homes.
                    </p>
                  )}
                </div>

                <div className="faq-item-1 mb-6">
                  <h5 onClick={() => showAnswer('ans-11', 'head-11')} className="faq-item-heading-1">
                    <div style={{ maxWidth: '90%' }}>Execution</div>
                    <img id="head-11" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-11') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </h5>
                  {isAnswerVisible('ans-11') && (
                    <p id="ans-11" className="faq-item-ans">
                      Our team will bring the designs to life with precision and care.
                    </p>
                  )}
                </div>

                <div className="faq-item-1 mb-6">
                  <h5 onClick={() => showAnswer('ans-12', 'head-12')} className="faq-item-heading-1">
                    <div style={{ maxWidth: '90%' }}>Final Touches</div>
                    <img id="head-12" src={Down} alt='img' loading="lazy" style={{ transform: isAnswerVisible('ans-12') ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </h5>
                  {isAnswerVisible('ans-12') && (
                    <p id="ans-12" className="faq-item-ans">
                      Adding the finishing touches to ensure everything is perfect.
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
          <div className="small-space" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Interiors;
