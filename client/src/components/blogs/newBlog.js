import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import build11 from '../../components/navbar/icons/build11.jpeg';
import build10 from '../../components/navbar/icons/build16.jpeg';
import './blog.css'

const NewBlog = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={build11}
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={build10}
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent1 />
      </TextParallaxContent>
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
      <div className="relative xs:h-[40vh] md:h-[80vh] max-w-full  mx-auto">
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
        height: `calc(80vh - ${IMG_PADDING * 2}px)`, 
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl max-w-full sm:max-w-5xl xs:max-w-3xl sm:max-w-6xl mx-auto max-height"
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
      className="absolute left-0 top-0 flex xs:h-[70vh] md:h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl sm:mb-4 sm:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-3xl font-bold sm:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-full sm:max-w-5xl grid-cols-1 gap-8 px-4 pb-12 pt-12 sm:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold sm:col-span-4">
    Cast In Situ / Conventional
    </h2>
    <div className="col-span-1 sm:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 sm:text-2xl">
      This is the very simple age old technology which even a layman can understand and work on where we bring all the raw materials to the construction site and deploy manpower / labourers and build everything at the site. This does take a lot of time and standard quality  is achieved.
      </p>
    </div>
  </div>
);
const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-full sm:max-w-5xl grid-cols-1 gap-8 px-4 pb-12 pt-12 sm:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold sm:col-span-4">
    Pre Fabricated / Metal Frame Hybrid Method
    </h2>
    <div className="col-span-1 sm:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 sm:text-2xl">
      This is a technology where metal frame is constructed or deployed once the foundation is done and then the concrete is casted for the roofs and walls are build around the structure. In this method 50% of the construction time can be saved and at almost the same cost or at lesser cost with far better quality than the traditional method and the biggest advantage is the ease of renovation in the future.
      </p>
    </div>
  </div>
);

export default NewBlog;
