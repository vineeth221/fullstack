import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const NewBlog = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent1 />
      </TextParallaxContent>
      {/* <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent />
      </TextParallaxContent> */}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[80vh] max-w-full  mx-auto">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(80vh - ${IMG_PADDING * 2}px)`, // Adjusted height for xs screens
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl max-w-full sm:max-w-5xl xs:max-w-3xl sm:max-w-6xl mx-auto"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl sm:mb-4 sm:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold sm:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-full sm:max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 sm:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold sm:col-span-4">
     Our Vision
    </h2>
    <div className="col-span-1 sm:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 sm:text-2xl">
        At 17 Columns, we envision a future where every family can afford
        a beautifully designed, high-quality home that meets their unique needs and preferences.
        We are committed to continuously evolving and adapting our services to exceed our clients'
        expectations, ensuring that each project  we undertake contributes to our
        legacy of excellence and innovation in the housing industry.
      </p>
    </div>
  </div>
);
const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-full sm:max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 sm:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold sm:col-span-4">
     Our Mission
    </h2>
    <div className="col-span-1 sm:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 sm:text-2xl">
        Furthermore, we are dedicated to using sustainable building practices
         and eco-friendly materials, ensuring that our homes are not only beautiful 
         and durable but also environmentally responsible. Through our commitment
          to quality, innovation, and customer-centric service, we aim to set a new
           standard in the housing industry, empowering individuals and families
            to achieve their dream homes without compromise.
      </p>
    </div>
  </div>
);

export default NewBlog;
