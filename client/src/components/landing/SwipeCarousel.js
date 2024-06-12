import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
// import Image1 from '../../components/navbar/icons/building.jpg';
import interior from '../../components/navbar/icons/interior.jpg';
import sofa from '../../components/navbar/icons/sofa.jpg';
import kitchen from '../../components/navbar/icons/kitchen.jpg';

const imgs = [
  // Image1,
  sofa,
  kitchen,
  interior,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10; 
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const TEXT_ANIMATION = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const IMAGE_ANIMATION = {
  hidden: { scale: 1 },
  visible: { scale: 1.1, transition: { duration: 10, ease: "linear" } },
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-2">  
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex, textPosition = 'center' }) => {
  const getTextStyles = () => {
    switch (textPosition) {
      case 'left':
        return {
          top: '0%',
          left: '20px',
          transform: 'translateY(-50%)',
          textAlign: 'left',
        };
      case 'right':
        return {
          top: '0%',
          right: '20px',
          transform: 'translateY(-50%)',
          textAlign: 'right',
        };
      case 'center':
      default:
        return {
          top: '35%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        };
    }
  };

  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden", 
            }}
            className="aspect-video w-[100vw] shrink-0 rounded-xl object-cover"
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))", // Linear gradient overlay
                zIndex: 2,
              }}
            />
            <motion.div
              initial="hidden"
              animate={imgIndex === idx ? "visible" : "hidden"}
              variants={TEXT_ANIMATION}
              style={{
                position: "absolute",
                zIndex: 3, // Ensure text appears above the gradient
                color: "white",
                width: "calc(100% - 0px)", // Adjust width to leave space for padding
                ...getTextStyles(),
              }}
              className="text-responsive"
            >
              <h2
                style={{
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
                  whiteSpace: "pre-wrap", // Allow text to wrap
                }}
              >
                WE BUILD YOUR
                <br />
                NEXT WORLD
              </h2>
            </motion.div>
            <motion.img
              src={imgSrc}
              alt={`Image ${idx}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
              initial="hidden"
              animate="visible"
              variants={IMAGE_ANIMATION}
            />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-2 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" /> {/* Reduced width */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" /> {/* Reduced width */}
    </>
  );
};

export default SwipeCarousel;
