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
import { Container, Row, Col } from 'react-bootstrap';
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
          <section className="px-4 py-12">
            <Container>
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> House<span style={{ color: "#3f97d2" }}> Construction 
              :</span></h2>
              <p className="mb-4 md:text-xl">
                17 Columns from the House Of vintage Realty is a tech driven turnkey residential
                construction service provider who offers complete services with regards to residential
                construction or house construction under single roof which includes Architectural Designs,
                Structural Designs, MEP designs, Interior Designs, House Construction, Home Interiors till
                the handover across technologies.
              </p>
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> Vintage<span style={{ color: "#3f97d2" }}> homes
                :</span></h2>
              <p className="mb-4 md:text-xl">
                17 Columns approach is very simple we believe in every home is unique and that uniqueness
                is the style, feel and theme of the house should define the character of the house owner
                and the family that is where the Architectural design comes first and then build or construct
                the same and bring life into it with great quality and on time or simply bring the Architect’s
                imagination into life with at most quality.
              </p>
              <p className="mb-4 md:text-xl">
                That’s why we say “17 Columns is the place where design meets and beautiful home need
                not be really expensive”
              </p>
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> Our <span style={{ color: "#3f97d2" }}> Models
                :</span>
                </h2>
              <p></p>
              <div>
                <h3 className="md:text-3xl sm:text-xl text-lg mb-2">Base Package Model:</h3>
                <p className="mb-4 md:text-xl">
                  Here, as our beloved client you get to choose the basic package considering your budget
                  and we design the house within the budget and boundaries and in case of any ala carte
                  added or upgradation you choose you only pay for it.
                </p>
              </div>
              <div>
                <h3 className="md:text-3xl sm:text-xl text-lg mb-2">Design First Model:</h3>
                <p className="mb-4 md:text-xl">
                  Here, as a client you get to choose to get the designs and plans first and then we derive the
                  costing where everything is customised and the designs happens openly with full freedom.
                  And the cost will not vary.
                </p>
              </div>
              <div>
                <h3 className="md:text-3xl sm:text-xl text-lg mb-2">Project Management Model:</h3>
                <p className="mb-4 md:text-xl">
                  Here, our clients can appoint us only to design and manage the project and the complete
                  procurement and labor pay out is completely in Customers Hand. In simple words you own
                  we manage and handover the project.
                </p>
              </div>
            </Container>
          </section>
          <div className="small-space" />
          <div className="main-heading text-center">
            <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
              Platform Showcase
            </p>
            <div className="underline" />
          </div>
          <div className="small-space" />
          <NewBlog />
          <Footer />
        </>
      )}
    </>
  );
};

export default Construction;
