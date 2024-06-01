import React, { useState } from "react";
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo2 from '../../components/navbar/icons/photo2.jpg';
import photo1 from '../../components/navbar/icons/photo1.jpg';
import testimonial1 from '../../components/navbar/icons/testimonial-1.jpeg';
import testimonial2 from '../../components/navbar/icons/testimonial-2.jpeg';
import testimonial3 from '../../components/navbar/icons/testimonial-3.jpeg';
import testimonial4 from '../../components/navbar/icons/testimonial-4.jpeg';
import testimonial5 from '../../components/navbar/icons/testimonial-5.jpeg';
import testimonial6 from '../../components/navbar/icons/testimonial-6.jpeg';

import './index.css';
import NewBlog from "../blogs/newBlog";

const Testimonials = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({ name: "", position: "", testimonial: "", img: "" });

    const testimonials = [
        {
            name: "Sneha K",
            position: "Sr Consultant, Delloite Germany",
            testimonial: "“Got my house constructed by 17 Columns and I must say for someone like me living abroad and having aged parents at home, I thought this is going to be impossible dream to achieve but the team did an amazing job, kept me well posted and got my house handed over.”",
            img: testimonial1
        },
        {
            name: "Nalini Venkateshmurthy",
            position: "IT Professional, Google",
            testimonial: "“It was easy and simple to communicate and they were more enthu over my house, right from the design to finish they were on top of it, definitely am recommending”",
            img: testimonial2
        },
        {
            name: "Punith R",
            position: "Vice President, Karantaka Vedike",
            testimonial: "“Have got few projects done by 17 Columns, my house is built by them and we are associated for the other building construction even now”",
            img: testimonial3
        },
        {
            name: "Lokeshwari M",
            position: "Project Manager, Mother Son technologies",
            testimonial: "“My home interiors is done from 17 Columns, the home which me and my husband bought together is beautifully designed and executed by 17 Columns, loved your work guys!”",
            img: testimonial4
        }
    ];

    const openModal = (testimonial) => {
        setModalContent(testimonial);
        setModalShow(true);
    };

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    speed: 3000,
                    autoplaySpeed: 3000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    speed: 7000,
                    autoplaySpeed: 7000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    speed: 7000,
                    autoplaySpeed: 7000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    speed: 7000,
                    autoplaySpeed: 7000,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    speed: 7000,
                    autoplaySpeed: 7000,
                    pauseOnHover: false,
                }
            }
        ]
    };

    return (
        <>
            <div className="small-space" />
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    Platform Showcase
                </p>
                <div className="underline" />
            </div>
            <div className="small-space" />
            <NewBlog />
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    Our Valued Clients
                </p>
                <span className="colour-text" style={{ fontSize: "1.2rem", fontWeight: "700" }}>Hear it from our beloved home owners</span>
            </div>
            <div className="small-space" />
            <Container>
                <Row  className="p-4">
                    {testimonials.map((testimonial, index) => (
                        <Col xl={3} lg={3} sm={12} md={4} className="ocm-margin" key={index}>
                            <div className="speakers">
                                <div className="">
                                    <div className="spk-img d-flex justify-content-center">
                                        <a href="#">
                                            <img className="img-fluid " src={testimonial.img} alt={testimonial.name} />
                                        </a>
                                    </div>
                                    <div className="spk-info h-100">
                                        <a href="#">
                                            <h3>{testimonial.name}</h3>
                                        </a>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                                <div className="moreinfo-btn">
                                    <a className="reg-btn" onClick={() => openModal(testimonial)}>More Info</a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="bg-gradient-to-r from-[#3f97d2] to-white rounded-lg overflow-hidden shadow-xl max-w-md w-full mx-4 md:mx-0">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">{modalContent.name}</h3>
                        <button className="text-gray-900 hover:text-gray-700 focus:outline-none" onClick={() => setModalShow(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
            <div className="p-4 text-center">
                <img src={modalContent.img} alt={modalContent.name} className="mx-auto mb-4 rounded-lg shadow-lg border-4 border-white" />
                <h4 className="text-xl font-semibold text-gray-900">{modalContent.position}</h4>
                <p className="mt-2 text-gray-700">{modalContent.testimonial}</p>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200">
                <button className="px-4 py-2 bg-[#3f97d2] text-white rounded hover:bg-[#1d6ea8] focus:outline-none" onClick={() => setModalShow(false)}>Close</button>
            </div>
        </div>
    </div>
</Modal>



            {/* Commented out slider and other sections as per your original code */}
            {/* <div className="small-space" />
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                   Platform Showcase
                </p>
            <div className="underline"/>
            </div>
            <div className="small-space" />
            <NewBlog/>
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                   Our Valued Clients
                </p>
                <span className="colour-text" style={{fontSize:"1.2rem", fontWeight:"700"}}>Hear it from our beloved home owners</span>  
            </div>
            <div className="small-space" />
            <Slider {...settings}>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial1} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial2} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial3} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            {/* <Slider {...settings1}> */}
                {/* <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial4} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial5} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={testimonial6} alt="testimonial" />
                        <Row>
                            <Col>
                                <div className="color-customs">
                                    <div className="small-sub-space" />
                                    <h2>Alex F.</h2>
                                    <h3>Fonder of xyz.</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> */}
            {/* </Slider> */}
        </>
    );
};

export default Testimonials;
