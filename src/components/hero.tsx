import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 550); // duration of navbar animation in milliseconds

    return () => clearTimeout(timer); // cleanup function to avoid memory leaks
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // you can adjust the duration as needed
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div
      id=""
      className="-mx-1 flex h-[92vh] items-center justify-center sm:h-[95vh] md:mx-0 md:px-28"
    >
      <motion.div
        className="md:pb-18 grid grid-cols-1 content-center items-center justify-start overflow-hidden px-10 pb-20
      "
        variants={fadeIn}
        initial="hidden"
        animate={startAnimation ? "show" : "hidden"}
      >
        <motion.h5
          className=" font-mono mb-1 text-base text-ebony md:mb-4 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
          variants={fadeIn}
        >
          Hi my name is{" "}
        </motion.h5>
        <motion.h1
          className="mb-1 text-2xl font-bold text-silverDark md:mb-4 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          variants={fadeIn}
        >
          Keith Loh.
        </motion.h1>
        <motion.h1
          className="mb-2 text-2xl font-bold text-silver md:text-4xl lg:mb-8 lg:text-6xl xl:text-7xl 2xl:text-8xl"
          variants={fadeIn}
        >
          <span className="relative ">
            <span className="text-brand-accent  whitespace-nowrap pt-2 ">
              Aspiring Software Engineer
            </span>
            <span
              className=" absolute -bottom-0 -top-1 left-0 inline-block
        w-full animate-type overflow-hidden bg-platinum will-change-transform after:absolute after:block after:h-full
        after:w-2 after:animate-cursor after:bg-ebony after:content-[''] dark:bg-platinum after:dark:bg-ebony "
            ></span>
          </span>
        </motion.h1>
        <motion.div
          className="w-full text-sm text-ebony md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
          variants={fadeIn}
        >
          I&apos;m a sophomore Information Systems student at SMU.
        </motion.div>
        <motion.div
          className="text-sm text-ebony md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
          variants={fadeIn}
        >
          Currently building tech for public good at&nbsp;
          <Link
            href="https://www.tech.gov.sg/"
            target="_blank"
            className="font-bold text-silver underline-offset-2 hover:text-silverDark hover:underline"
          >
            GovTech
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
