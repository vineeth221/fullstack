import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const CountUpStats = () => {
  const [counts, setCounts] = useState([0, 0, 0]); // Initial counts set to 0
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const fetchData = async () => {
        setTimeout(() => {
          setCounts([50, 83, 200]);
        });
      };
      fetchData();
    }
  }, [isVisible]);

  return (
    <>
      <div className="small-space" />
      <div className="main-heading text-center">
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
        17 Columns is your perfect find to build your bespoke home just your way!
        </p>
      </div>
      <div className="small-space" />
      <div className="flex justify-center" ref={statsRef}>
        <div className="bg-gray-200 rounded-lg flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 custom-count">
          {counts.map((count, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-4xl sm:text-3xl font-bold">
                  <CountUp
                    start={0}
                    end={isVisible ? count : 1}
                    duration={2}
                    separator=","
                  />
                </span>
                {index === 0 && (
                  <span className="text-4xl sm:text-base ml-1">+</span>
                )}
                {(index === 1 || index === 2) && (
                  <span className="text-4xl sm:text-base ml-1">%</span>
                )}
              </div>
              <p className="custom-text text-sm sm:text-base">
                {index === 0 && "Happy Homes Delivered"}
                {index === 1 && "Happy Families"}
                {index === 2 && "More Happiness under construction"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountUpStats;
