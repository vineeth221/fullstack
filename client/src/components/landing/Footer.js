import React, { useState, useEffect } from "react";
import ItemsContainer from "../../components/landing/ItemContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import Slider from "react-slick";
import './index.css'
import Hyderabad from '../../components/navbar/icons/Hyderabad.svg';
import Mysore from '../../components/navbar/icons/Mysore.svg';
import vizag from '../../components/navbar/icons/vizag.svg';
import kochi from '../../components/navbar/icons/kochi.svg';


const Footer = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const grayscaleStyle = {
        filter: "hue-rotate(338deg)",
    };

    const carouselSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    const carouselSettings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <>
            <div className="small-sub-space" />
            <div className="small-space" />
            <footer className="bg-gray-900 text-white">
            {screenSize > 900  &&  (
                <>
                <div className="coming-soon">
                    <div className="sample">
                    <Slider {...carouselSettings}>
                    <div className="autoslide-img">
                        <img src={Hyderabad} alt="Hyderabad" style={grayscaleStyle} />
                        <p>Hyderabad</p>
                    </div>
                    <div className="autoslide-img">
                        <img src={Mysore} alt="Mysore" style={grayscaleStyle} />
                        <p>Mysore</p>
                    </div>
                    <div className="autoslide-img">
                        <img src={vizag} alt="Vizag" style={grayscaleStyle} />
                        <p>Amaravathi</p>
                    </div>
                    <div className="autoslide-img">
                        <img src={kochi} alt="Kochi" style={grayscaleStyle} />
                        <p>Mangalore</p>
                    </div>
                </Slider>
            </div>
                        </div>
                <div className="coming-title" />
                </>
            )}
                
                {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div> */}
                <ItemsContainer />
                {screenSize < 900 && (
                        <>
                <div
                    className="grid gap-10 text-center pt-4 text-gray-400 text-sm pb-8 centered-div"
                    style={{ fontSize: "1.2rem", fontWeight: 600, borderTop: "1px solid rgb(55 65 81)", padding: "1.5rem" }}
                >
                    
                    <div className="card-container">
                        <div className="carder">
                          <div className="coming-card-title" />
                        <div className="carousal-icon">
                          <Slider {...carouselSettings1}>
                            <div className="autoslide-img-mob">
                           <img src={Hyderabad} />
                           <p>Hyderabad</p>
                           </div>
                           <div className="autoslide-img-mob">
                           <img src={Mysore} />
                           <p>Mysore</p>
                           </div>
                           <div className="autoslide-img-mob">
                           <img src={vizag} />
                           <p>Amaravathi</p>
                           </div>
                           <div className="autoslide-img-mob">
                           <img src={kochi} />
                           <p>Mangalore</p>
                           </div>
                        </Slider>
                        </div>
                        </div>
                    </div>
                   
                </div>
                 </>
                 )}
                <div
                  className="grid gap-10 text-center text-gray-400 text-sm"
                  style={{ fontSize: "1.2rem", fontWeight: 600, borderTop: "1px solid rgb(55 65 81)", padding: "1.5rem" }}
                >
                    <p>Follow us : <div style={{ padding: '1rem' }} ><SocialIcons Icons={Icons} /></div></p>
                </div>
                <div
                    className="grid  gap-10 text-center text-gray-400 text-sm "
                    style={{ fontSize: "1.2rem", fontWeight: 600, borderTop: "1px solid rgb(55 65 81)", padding: "2rem" }}
                >
                    <span>All Rights Reserved © 2024 Build Craft Pvt Ltd</span>
                </div>
            </footer>
        </>
    );
};

export default Footer;