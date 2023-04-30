import React, { useState } from 'react';
import Link from "next/link";
import config, { NavLink } from "~/config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mx-auto rounded-lg px-12 py-6 shadow-inner drop-shadow-xl">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-x-5 md:flex-nowrap">
        <div className="w-full flex justify-between gap-x-2 md:flex">
          <div>
            <Link href="/">
              <div className="text-xl font-bold text-ebony transition ease-in-out delay-150 hover:text-white duration-300 xl:text-3xl lg:text-2xl">
                Keith Loh
              </div>
            </Link>
          </div>
          <button
            className="flex cursor-pointer md:hidden items-center px-3 py-2 border rounded text-ebony border-ebony hover:text-white hover:border-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ?  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>)
              : (<svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                >
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
                </svg>)
              }
          </button>
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex items-center justify-between gap-x-6 md:flex-wrap fixed md:fixed top-0 right-0 md:mt-7 mt-20 mr-6`}
          >
            <ol className="flex justify-evenly md:flex-row flex-col list-none">
              {config.navLinks &&
                config.navLinks.map(({ url, name }: NavLink, i: number) => (
                  <li
                    className="relative text-sm xl:text-lg lg:text-base
                  font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
                    before:w-full before:origin-top-left before:scale-x-0
                    before:bg-white before:transition before:duration-300
                    before:ease-in-out before:content-[''] hover:text-white before:hover:scale-x-100  mx-6 "
                    key={i}
                  >
                    <Link href={url}>
                      <div onClick={() => setMenuOpen(false)}>{name}</div>
                    </Link>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;