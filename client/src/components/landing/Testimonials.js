import React, { useRef } from "react";
import { Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo2 from '../../components/navbar/icons/photo2.jpg';
import photo1 from '../../components/navbar/icons/photo1.jpg';
import './index.css';

const Testimonials = () => {

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 7000,
        pauseOnHover: false, 
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    speed: 7000,
                    autoplaySpeed: 7000,
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

    const settings1 = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 8000,
        pauseOnHover: false, 
        cssEase: "linear",
        rtl: true, // Set to true to make the carousel move from right to left
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    speed: 7000,
                    autoplaySpeed: 7000,
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
                   Our Valued Clients
                </p>
                <span className="colour-text" style={{fontSize:"1.2rem", fontWeight:"700"}}>Hear it from our beloved home owners</span>  
            </div>
            <div className="small-space" />
            <Slider {...settings}>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={photo2} alt="testimonial" />
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
                        <img src={photo1} alt="testimonial" />
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
                        <img src={photo2} alt="testimonial" />
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
                        <img src={photo1} alt="testimonial" />
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
            </Slider>

            <Slider {...settings1}>
                <div className="row-space">
                    <div className="autoslideImg">
                        <img src={photo2} alt="testimonial" />
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
                        <img src={photo1} alt="testimonial" />
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
                        <img src={photo2} alt="testimonial" />
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
                        <img src={photo1} alt="testimonial" />
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
                        <img src={photo2} alt="testimonial" />
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
                        <img src={photo1} alt="testimonial" />
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
            </Slider>
        </>
    );
};

export default Testimonials;
