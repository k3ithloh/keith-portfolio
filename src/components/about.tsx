import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div
      id="about"
      className=" flex h-[75vh] flex-col items-center justify-center px-10 md:h-[65vh] md:px-28"
    >
      <motion.div ref={ref} className=" flex max-w-6xl flex-wrap">
        <motion.h1
          className="mt-0 text-2xl font-bold  text-silverDark md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          About Me
        </motion.h1>
        <motion.div
          className=" grid w-full grid-cols-1 place-items-center lg:grid-cols-2 "
          variants={fadeIn}
          initial="hidden"
          animate={controls}
        >
          <div className="col-span-1 mt-4 content-center pb-8 text-sm text-ebony md:mt-8 md:pb-16 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {" "}
            I&apos;m a sophmore year Information Systems student at Singapore
            Management University, majoring in digital cloud solutions and
            business analytics. A highly motivated individual with a keen eye
            for detail, who constantly strives to improve his skills.
            <br></br>
            <br></br>I&apos;m passionate about software development, web3,
            mechanical keyboards, photography and Formula 1.
          </div>
          <div className="place-self-center">
            <Image
              className=" h-64 w-auto ease-in-out md:h-72 lg:h-96 lg:duration-300 lg:hover:scale-125"
              width={800}
              height={800}
              src="/img/keith.JPG"
              alt="keith"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
