import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  mx-auto rounded-lg px-12 py-6 shadow-inner drop-shadow-xl">
      <div className=" mx-auto flex flex-wrap items-center  justify-between gap-x-5  md:flex-nowrap">
        <div className="w-full flex-grow justify-between gap-x-2 md:flex">
          <div>
            <Link href="/" className="text-2xl font-bold hover:text-jet">
              Keith Loh
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 md:flex-nowrap">
            <Link
              href="/#about"
              className="relative text-base
            font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-black before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-jet before:hover:scale-x-100  "
            >
              <span className="text-jet">01. </span>
              <span className="">About</span>
            </Link>
            <Link
              href="/#experience"
              className="relative text-base
            font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-black before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-jet before:hover:scale-x-100  "
            >
              <span className="text-jet">02. </span>
              <span className="hover:text-jet">Experience</span>
            </Link>
            <Link
              href="/#projects"
              className="relative text-base
            font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-black before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-jet before:hover:scale-x-100  "
            >
              <span className="text-jet">03. </span>
              <span className="hover:text-jet">Projects</span>
            </Link>
            <Link
              href="/#contact"
              className="relative text-base
            font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-black before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-jet before:hover:scale-x-100  "
            >
              <span className="text-jet">04. </span>
              <span className="hover:text-jet">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
