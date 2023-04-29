import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto flex rounded-lg px-12 py-6">
      <div className=" mx-auto flex flex-wrap items-center  justify-between gap-x-5  md:flex-nowrap">
        <Link
          href="/https://github.com/k3ithloh/keith-portfolio"
          className="text-base text-white hover:text-jet"
        >
          Designed & Built by Keith Loh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
