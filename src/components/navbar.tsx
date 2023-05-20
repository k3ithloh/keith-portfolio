import React, { useState, useEffect } from "react";
import Link from "next/link";
import config, { type NavLink } from "~/config";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // you can adjust the duration as needed
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.nav
      className="mx-auto rounded-lg px-8 py-6 shadow-inner  drop-shadow-xl md:px-12"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      {/* <nav className=" mx-auto rounded-lg px-12 py-6 shadow-inner drop-shadow-xl"> */}
      <div className="mx-auto flex flex-wrap items-center justify-between gap-x-5 md:flex-nowrap">
        <div className="flex w-full justify-between gap-x-2 md:flex">
          <div className="">
            <Link href="/">
              <div className="text-xl font-bold text-ebony transition delay-150 duration-300 ease-in-out hover:text-white lg:text-2xl xl:text-3xl">
                Keith Loh
              </div>
            </Link>
          </div>
          <button
            className="flex cursor-pointer items-center rounded border border-ebony px-3 py-2 text-ebony hover:border-white hover:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
              </svg>
            )}
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } fixed right-0 top-0 mr-6 mt-20 items-center justify-between gap-x-6 sm:w-auto md:mt-7 md:flex md:flex-wrap `}
          >
            <ol className="flex list-none flex-col justify-evenly md:flex-row">
              {config.navLinks &&
                config.navLinks.map(({ url, name }: NavLink, i: number) => (
                  <motion.li
                    className="relative mx-6 text-sm
      font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
        before:w-full before:origin-top-left before:scale-x-0
        before:bg-white before:transition before:duration-300
        before:ease-in-out before:content-[''] hover:text-white before:hover:scale-x-100  lg:text-base xl:text-lg"
                    key={i}
                    variants={fadeIn}
                  >
                    <Link href={url} scroll={false}>
                      <div onClick={() => setMenuOpen(false)}>{name}</div>
                    </Link>
                  </motion.li>
                ))}
            </ol>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </motion.nav>
  );
};

export default Navbar;
