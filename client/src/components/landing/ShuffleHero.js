import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import build1 from '../../components/navbar/icons/build1.jpeg';
import build2 from '../../components/navbar/icons/build2.jpeg';
import build3 from '../../components/navbar/icons/build3.jpeg';
import build4 from '../../components/navbar/icons/build4.jpeg';
import build5 from '../../components/navbar/icons/build5.jpeg';
import build6 from '../../components/navbar/icons/build6.jpeg';
import build7 from '../../components/navbar/icons/build7.jpeg';
import build8 from '../../components/navbar/icons/build8.jpeg';
import build9 from '../../components/navbar/icons/build9.jpeg';
import build10 from '../../components/navbar/icons/build10.jpeg';
import build11 from '../../components/navbar/icons/build11.jpeg';
import build12 from '../../components/navbar/icons/build12.jpeg';
import build13 from '../../components/navbar/icons/build13.jpeg';
import build14 from '../../components/navbar/icons/build14.jpeg';
import build15 from '../../components/navbar/icons/build15.jpeg';
import build16 from '../../components/navbar/icons/build16.jpeg';

import './index.css'


const ShuffleHero = () => {
  return (
<> 
  <div className="main-heading text-center">
    <p className="text-lg sm:text-xl lg:text-4xl xl:text-3xl">
  <span className="colour-text">Every Home Tells A Story, We help them build!</span>  
    </p>
  </div>
    <section className="w-full py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          At 17 Columns
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold" style={{lineHeight: "57px"}}>
        Let us start designing and building your home
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        We offer complete turnkey house construction services right from the architectural designing to constructing the home to interiors till handover.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
        Get your free consultation
        </button>
      </div>
      <ShuffleGrid />
    </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: build1,
  },
  {
    id: 2,
    src:build2,
  },
  {
    id: 3,
    src:build3,
  },
  {
    id: 4,
    src:build4,
  },
  {
    id: 5,
    src:build5,
  },
  {
    id: 6,
    src:build6,
  },
  {
    id: 7,
    src:build7,
  },
  {
    id: 8,
    src:build8,
  },
  {
    id: 9,
    src:build9,
  },
  {
    id: 10,
    src:build10,
  },
  {
    id: 11,
    src:build11,
  },
  {
    id: 12,
    src:build12,
  },
  {
    id: 13,
    src:build13,
  },
  {
    id: 14,
    src:build14,
  },
  {
    id: 15,
    src:build15,
  },
  {
    id: 16,
    src:build16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;