import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaBuilding, FaHome, FaBriefcase, FaCity } from "react-icons/fa"; // Import icons
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../../components/landing/Footer';
import Loader from '../loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import build12 from '../../components/navbar/icons/build12.jpeg';
import '../landing/index.css';
import Choose from "../landing/choose";

const COLORS_TOP = ["#3f97d2"];

export const Wintage = () => {
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
                        <img src={build12} alt="17Columns Construction and Interiors" className="background-image" />
                        <div className="overlay">
                            <div className="overlay-content">
                                <div className="relative z-10 flex flex-col items-center">
                                    <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                                    Wintage Reality
                                    </h1>
                                    <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
                                    The best way to predict the future is to create it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="px-4 py-6">
                        <Container>
                            <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> House Of <span className="text-[#3f97d2]"> Wintage Reality
                                :</span></h2>
                            <p className="mb-4 md:text-xl">
                                House Of Wintage Reality is an Asset Making, Asset Owning and Asset Creation company in
                                real estate which focuses on the unique fusion of both old money and new age ideologies.
                                We help our clients create performing, non performing, returns yielding, capital
                                appreciating real estate assets and help leading financially secured, independent and
                                aspirational life style.
                            </p>
                            <p className="mb-4 md:text-xl">
                                The idea is quite simple adapt to new age ideologies, demands and stay close to old money
                                and help people be part of the 1% of the club.
                            </p>
                            <div className="small-space" />
                            <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4"> Our <span className="text-[#3f97d2]"> Brands
                                :</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                                    <FaBuilding className="text-[#3f97d2] text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Wintage Reality</h3>
                                    <p className="text-center">Commercial Space Building and Creation</p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                                    <FaBriefcase className="text-[#3f97d2] text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Wintage Properties</h3>
                                    <p className="text-center">Property Owning Services</p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                                    <FaHome className="text-[#3f97d2] text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Wintage Homes</h3>
                                    <p className="text-center">Your Goto Home Brand</p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                                    <FaCity className="text-[#3f97d2] text-5xl mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Wintage Assets</h3>
                                    <p className="text-center">Commercial Assets Creating Brand</p>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <Footer />
                </>
            )}
        </>
    );
};

export default Wintage;
