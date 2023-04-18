import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="  mx-auto rounded-lg border-b px-5 py-4 shadow dark:border-gray-800">
      <div className=" mx-auto flex flex-wrap items-center  justify-between gap-x-5  md:flex-nowrap">
        <div className="w-full flex-grow justify-between gap-x-2 md:flex">
          <div>
            <Link href="/" className="text-xl font-bold">
              Keith Loh
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-2 md:flex-nowrap">
            <Link href="/" className="text-base font-medium">
              <span className="text-blue-600">01. </span>
              <span>About</span>
            </Link>
            <Link href="/about" className=" text-base font-medium">
              <span className="text-blue-600">02. </span>
              <span>Experience</span>
            </Link>
            <Link href="/projects" className="text-base font-medium">
            <span className="text-blue-600">03. </span>
            <span className="">Projects</span>
            </Link>
            <Link href="/projects" className="text-base font-medium">
            <span className="text-blue-600">04. </span>
            <span className="">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
