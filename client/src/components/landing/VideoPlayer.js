import React from "react";
import video from '../../components/navbar/icons/video.mp4';

const VideoPlayer = () => {
    return (
        <>
            <div className="main-heading text-center">
                <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
                    <span className="colour-text">Our Interiors Project</span>
                </p>
            </div>
            <div className="small-space" />
            <div style={{ position: "relative", width: "100%" }}>
                <video autoPlay loop muted width="100%" height="400px" style={{ zIndex: "0" }}>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
                        zIndex: "1",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "20px",
                        color: "white",
                    }}
                >
                    <div>
                        <h1 style={{
                            fontSize: "40px", fontWeight: "400", margin: " 0rem 2rem",
                            fontWeight: "400",
                            maxWidth: "700px"
                        }}>Experience the Elegance of Italian and Modular Interiors</h1>
                        <button className="bg-indigo-500 mt-3 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" style={{ margin: " .5rem 2rem .5rem 2rem", fontSize: "1rem" }}>
                            Join as customer
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoPlayer;
