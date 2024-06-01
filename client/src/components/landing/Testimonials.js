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
                <Row >
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
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                    <img src={modalContent.img} alt={modalContent.name} className="img-fluid mb-3 centered-img" />
                    <h4>{modalContent.position}</h4>
                    <p>{modalContent.testimonial}</p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" className="custom-close-btn" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
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
