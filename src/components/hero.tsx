import Link from "next/link";
import { useRef, useEffect } from "react";
import { XyzTransitionGroup } from "@animxyz/react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <XyzTransitionGroup
      appear
      duration="auto"
      xyz="fade up duration-10 stagger ease-in-out delay-6"
    >
      <div
        id=""
        className="-mx-1 flex h-[92vh] items-center justify-center sm:h-[85vh] md:mx-0 md:px-28"
      >
        <div className="md:pb-18 grid grid-cols-1 content-center items-center justify-start overflow-hidden px-10 pb-20">
          <h5 className=" font-mono xyz-nested mb-1 text-base text-ebony md:mb-4 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Hi my name is{" "}
          </h5>
          <h1 className="xyz-nested mb-1 text-2xl font-bold text-silverDark md:mb-4 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Keith Loh.
          </h1>
          <h1 className="xyz-nested mb-2 text-2xl font-bold text-silver md:text-4xl lg:mb-8 lg:text-6xl xl:text-7xl 2xl:text-8xl">
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
          </h1>
          <div className="xyz-nested w-full text-sm text-ebony md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            I&apos;m a sophomore Information Systems student at SMU.
          </div>
          <div className="xyz-nested text-sm text-ebony md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Currently building tech for public good at&nbsp;
            <Link
              href="https://www.tech.gov.sg/"
              target="_blank"
              className="font-bold text-silver underline-offset-2 hover:text-silverDark hover:underline"
            >
              GovTech
            </Link>
            .
          </div>
        </div>
      </div>
    </XyzTransitionGroup>
  );
};

export default Hero;
