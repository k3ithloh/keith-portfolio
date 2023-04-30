import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mx-8 grid grid-rows-1 justify-start content-center ml-40 mt-72 mb-72">
      <h5 className="mb-4 font-mono text-lg text-ebony md:text-xl">Hi my name is </h5>
      <h1 className="mb-4 font-bold text-4xl text-white md:text-6xl">Keith Loh.</h1>
      <h1 className="mb-8 font-bold text-4xl text-silver md:text-6xl">
        <span className="relative">
          <span className="text-brand-accent overflow-x-hidden whitespace-nowrap pt-2">
          Aspiring Software Engineer
          </span>
          <span className="after:content-[''] after:block after:absolute after:w-2 after:h-full
        after:dark:bg-ebony after:bg-gray-900 after:animate-cursor absolute left-0 inline-block w-full bg-white
        dark:bg-platinum -bottom-0 -top-1 animate-type will-change-transform"></span>
      </span>
      </h1>
      <div className="text-lg text-ebony md:text-xl">
        I'm a sophomore Information Systems student at SMU.
      </div>
      <div className="text-lg text-ebony md:text-xl">
        Currently building tech for public good at <Link href="https://www.tech.gov.sg/" target="_blank" className="font-bold text-silver hover:underline underline-offset-2">GovTech</Link>.
      </div>
    </div>
  );
};

export default Hero;
