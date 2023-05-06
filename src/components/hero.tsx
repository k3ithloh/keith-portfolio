import Link from 'next/link';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setHeight = () => {
      if (heroRef.current) {
        heroRef.current.style.height = `${window.innerHeight * 0.95}px`;
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);
  
  return (
    <div ref={heroRef} id="" className="flex justify-center items-center h-[95vh] md:h-[95vh] pb-16 px-10 md:px-28">
      <div className="px-10 grid grid-cols-1 justify-start content-center overflow-hidden items-center ">
      <h5 className=" mb-1 md:mb-4 font-mono text-base md:text-lg text-ebony lg:text-xl xl:text-2xl 2xl:text-3xl">Hi my name is </h5>
      <h1 className="mb-1 md:mb-4 font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white">Keith Loh.</h1>
      <h1 className="mb-2 lg:mb-8 font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-silver">
        <span className="relative ">
          <span className="text-brand-accent  whitespace-nowrap pt-2 ">
          Aspiring Software Engineer
          </span>
          <span className=" after:content-[''] after:block after:absolute after:w-2 after:h-full
        after:dark:bg-ebony after:bg-ebony after:animate-cursor absolute left-0 inline-block w-full bg-platinum
        dark:bg-platinum -bottom-0 -top-1 animate-type will-change-transform overflow-hidden "></span>
      </span>
      </h1>
      <div className="text-sm md:text-base text-ebony lg:text-lg xl:text-xl 2xl:text-2xl w-full">
        I&apos;m a sophomore Information Systems student at SMU.
      </div>
      <div className="text-sm md:text-base text-ebony lg:text-lg xl:text-xl 2xl:text-2xl">
        Currently building tech for public good at&nbsp;<Link href="https://www.tech.gov.sg/" target="_blank" className="font-bold text-silver hover:underline underline-offset-2">GovTech</Link>.
      </div>
    </div>
    </div>
    
  );
};

export default Hero;
