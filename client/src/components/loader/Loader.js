import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-blue  bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
        <BarLoader />
      </div>
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 1.7,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-16 w-3 bg-indigo-500" /> {/* Larger bars and indigo color */}
      <motion.div variants={variants} className="h-16 w-3 bg-indigo-500" />
      <motion.div variants={variants} className="h-16 w-3 bg-indigo-500" />
      <motion.div variants={variants} className="h-16 w-3 bg-indigo-500" />
      <motion.div variants={variants} className="h-16 w-3 bg-indigo-500" />
    </motion.div>
  );
};

export default Loader;
