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
import build6 from '../../components/navbar/icons/building.jpeg';
import build5 from '../../components/navbar/icons/building5.jpeg';
import build4 from '../../components/navbar/icons/building4.jpeg';
import build3 from '../../components/navbar/icons/building3.jpeg';
import build2 from '../../components/navbar/icons/building2.jpeg';
import build1 from '../../components/navbar/icons/building1.jpeg';

// import NewBlog from '../../components/blogs/newBlog';

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const COLORS_TOP = ["#3f97d2"];

export const AboutUS = () => {
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
          <motion.section
            style={{
              backgroundImage,
            }}
            className="relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
          >
            <div className="relative z-10 flex flex-col items-center">
              {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                Beta Now Live!
              </span> */}
              <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                17 Columns is where Designs meet Quality for you
              </h1>
              <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                17 Columns is a premium crafted house construction and home interiors brand from the House of Wintage Realty
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
                Know about Wintage Reality
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </motion.button>
            </div>

            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={50} count={2500} factor={4} fade speed={2} />
              </Canvas>
            </div>
          </motion.section>

          <section className="px-4 py-6">
            <div className="container mx-auto">
              <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4">Know <span style={{color:"#3f97d2"}}>About Us ?</span></h2>
              <p className="mb-4 md:text-xl">
                17 Columns is a premium crafted house construction and home interiors brand from the House of Wintage Realty. Driven by three simple principles—Great Design, Right Costing, and Uncompromised Quality—17 Columns ensures that great architectural design and superior quality are delivered at the right cost. As a home aspirant, everyone desires and deserves a home that embodies these qualities, and at 17 Columns, this is precisely what we provide. As we always say, “Happiness Under Construction.”
              </p>
              <p className="mb-4 md:text-xl">
                17 Columns offers more than just house construction. We provide comprehensive home interior solutions tailored to your specific needs and preferences. Our commitment to using the best materials, innovative design techniques, and skilled craftsmanship ensures that every project we undertake meets the highest standards of excellence. We also offer post-construction support and maintenance services to ensure your home remains in perfect condition for years to come.
              </p>
              <p className="mb-4 md:text-xl">
                At 17 Columns, we believe that a beautiful home need not be expensive. Our focus on delivering high-quality designs at the right cost without compromising quality sets us apart in the industry. We are dedicated to making your dream home a reality, one that reflects your personality and style, ensuring lasting happiness and satisfaction.
              </p>
              <div className="custom-bg-abt">
                <h3 className="md:text-6xl sm:text-4xl text-3xl mb-6" style={{marginTop:"3rem"}}>Mission & Vision</h3>
                <h3 className="md:text-4xl sm:text-3xl text-2xl mb-4"><span style={{color:"#3f97d2"}}>Vision</span></h3>
                <p className="mb-4 md:text-xl">
                  Our vision is to become the go-to house construction and home interiors brand that helps every Indian gift their dream home to their families with great aesthetics and quality. We aspire to set new benchmarks in the residential construction industry by seamlessly blending innovative design, cutting-edge technology, and top-notch craftsmanship. By doing so, we aim to transform the way people perceive home building, making it an enjoyable and stress-free experience.
                </p>
                <h3 className="md:text-4xl sm:text-3xl text-2xl mb-4"><span style={{color:"#3f97d2"}}>Mission</span></h3>
                <p className="mb-4 mb-4 md:text-xl">
                  We aim to ensure that home aspirants no longer fall victim to market traps and that every home is built with exceptional design and the best industry quality. Our mission is to provide a transparent and trustworthy construction process, where clients are fully informed and involved at every stage. By prioritizing customer satisfaction and maintaining open communication, we strive to eliminate the uncertainties and frustrations commonly associated with home construction.
                </p>
              </div>
            </div>
          </section>
          <Container className="d-flex justify-content-center">
            <Row>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">04-05</span>
                        <span className="entry-month">NOV</span>
                      </h4>
                      <a href="#"><img src={build1} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Innovative Designs, Superior Quality</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">07-08</span>
                        <span className="entry-month">Aug</span>
                      </h4>
                      <a href="#"><img src={build2} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Personalized Interiors Tailored to You</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">02-03</span>
                        <span className="entry-month">April</span>
                      </h4>
                      <a href="#"><img src={build3} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Experience the Elegance of Italian and Modular Interiors</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
          <Container className="d-flex justify-content-center">
          <Row>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">10-02</span>
                        <span className="entry-month">Sep</span>
                      </h4>
                      <a href="#"><img src={build4} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Comprehensive Interior Solutions for Every Room</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">02-09</span>
                        <span className="entry-month">May</span>
                      </h4>
                      <a href="#"><img src={build5} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Craftsmanship That Stands the Test of Time</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
              <Col md={4}>
                <article className="blog-posts d-flex justify-content-center mt-4">
                  <div className="entry-wrapper">
                    <div className="entry-cover">
                      <h4 className="entry-time">
                        <span className="entry-day">01-11</span>
                        <span className="entry-month">Feb</span>
                      </h4>
                      <a href="#"><img src={build6} alt="Midwifery 2024" /></a>
                    </div>
                    <div className="entry-content-wrap">
                      <div className="entry-header">
                        <h2 className="entry-title">
                          <a href="#">Illuminate Your Space with Exquisite Lighting</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
          {/* <NewBlog/> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default AboutUS;
