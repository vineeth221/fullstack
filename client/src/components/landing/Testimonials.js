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
import Fin from '../../components/navbar/icons/brands/fin.jpeg';
import Astral from '../../components/navbar/icons/brands/Astral.jpeg';
import supreme from '../../components/navbar/icons/brands/supreme.jpeg';
import panasonic from '../../components/navbar/icons/brands/panasonic.jpeg';
import havells from '../../components/navbar/icons/brands/havells.jpeg';
import anchor from '../../components/navbar/icons/brands/anchor.jpeg';
import kajaria from '../../components/navbar/icons/brands/kajaria.jpeg';
import lavish from '../../components/navbar/icons/brands/lavish.jpeg';
import hafele from '../../components/navbar/icons/brands/hafele.jpeg';
import hettich from '../../components/navbar/icons/brands/hettich.jpeg';
import merico from '../../components/navbar/icons/brands/merico.jpeg';
import greenlam from '../../components/navbar/icons/brands/greenlam.jpeg';
import greenply from '../../components/navbar/icons/brands/greenply.jpeg';
import jaguar from '../../components/navbar/icons/brands/jaguar.jpeg';
import centuryply from '../../components/navbar/icons/brands/centuryply.jpeg';
import hindware from '../../components/navbar/icons/brands/hindware.jpeg';
import kohler from '../../components/navbar/icons/brands/kohler.jpeg';
import fenesta from '../../components/navbar/icons/brands/fenesta.jpeg';
import asian from '../../components/navbar/icons/brands/asian.jpeg';
import priya from '../../components/navbar/icons/brands/priya.jpeg';
import acc from '../../components/navbar/icons/brands/acc.jpeg';
import zuari from '../../components/navbar/icons/brands/zuari.jpeg';
import birla from '../../components/navbar/icons/brands/birla.jpeg';
import dalmia from '../../components/navbar/icons/brands/dalmia.jpeg';
import kamdhenu from '../../components/navbar/icons/brands/kamdhenu.jpeg';
import ultracement from '../../components/navbar/icons/brands/ultracement.jpeg';
import berger from '../../components/navbar/icons/brands/berger.jpeg';
import nipon from '../../components/navbar/icons/brands/nipon.jpeg';
import tatasteel from '../../components/navbar/icons/brands/tatasteel.jpeg';
import fixit from '../../components/navbar/icons/brands/fixit.jpeg';
import './index.css';
// import NewBlog from "../blogs/newBlog";

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
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        pauseOnHover: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            }
        ]
    };
    const settings1 = {
        arrows: false,
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        pauseOnHover: false,
        cssEase: "linear",
        rtl: true,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    speed: 5000,
                    autoplaySpeed: 0,
                    pauseOnHover: false,
                }
            }
        ]
    };

    return (
        <div>

            <div className="small-space" />
            <div className="small-space" />
            {/* <NewBlog /> */}
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    Our Valued Clients
                </p>
                <span className="colour-text" style={{ fontSize: "1rem", fontWeight: "700" }}>Hear it from our beloved home owners</span>
            </div>
            <div className="small-space" />
            <Container>
                <Row className="p-4">
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
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    Our Associate Partners
                </p>
            </div>
            <div className="small-space" />
            <Slider {...settings}>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={Fin} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={Astral} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={supreme} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={panasonic} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={greenlam} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={havells} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={greenply} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={anchor} />
                            </div>
                        </Col>
                    </Row>
                </div> <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={kajaria} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={lavish} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={centuryply} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={hettich} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={merico} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Slider>
            <div className="small-space" />
            <Slider {...settings1}>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={jaguar} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">
                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={hafele} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">
                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={priya} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={kohler} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={berger} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={asian} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={fenesta} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={tatasteel} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={fixit} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={nipon} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={ultracement} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={dalmia} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={birla} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="row-space">

                    <Row>
                        <Col>
                            <div className="small-testi">
                                <img src={acc} />
                            </div>
                        </Col>
                    </Row>
                </div>

            </Slider>
            <div className="small-space" />
        </div>
    );
};

export default Testimonials;


{/* <div className="row-space">
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
