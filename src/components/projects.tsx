import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";
import { useRef, useEffect } from "react";
import IconRunnerUp from "./icons/runnerup";

const Projects = () => {
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setHeight = () => {
      if (projectRef.current) {
        projectRef.current.style.height = `${window.innerHeight * 0.95}px`;
      }
    };

    setHeight();
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <div
      ref={projectRef}
      id="projects"
      className="flex h-[95vh] flex-col items-center justify-center px-10 md:px-28"
    >
      <div className="flex max-w-6xl flex-wrap">
        <h1 className="mb-4 grow text-2xl font-bold text-white md:text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Things I&apos;ve Built
        </h1>
        <div className="py-8">
          <ol className="relative border-l border-white  dark:border-white">
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700">
                <Image
                  className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                  width="0"
                  height="0"
                  src="/img/ellipsis.svg"
                  alt="Ellipsis"
                />
              </div>
              <div className="flex">
                <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                  August 2022
                </time>
                <IconRunnerUp></IconRunnerUp>
              </div>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl 
              "
              >
                <Link
                  href="https://github.com/k3ithloh?tab=repositories"
                  target="_blank"
                >
                  Elipsis Tech Series 2022 Hackathon by Goldman Sachs
                </Link>
              </h3>

              <h3>1st Runner Up</h3>
              <h3 className="l:text-xl mt-0 text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                Team Rainbow and Unicorns
              </h3>
              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed GS Service Exchange, a one stop integrated
                    marketplace, for B2B and B2C. It is a marketplace, of
                    Goldman Sachs open banking services,it allows businesses to
                    integrate their industry-standard services and monitor all
                    transactions in one place.
                  </p>
                </li>
              </ul>
            </li>
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2022 - August 2022
              </time>
              <h3 className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl">
                <Link href="https://solana.fm/" target="_blank">
                  SolanaFM
                </Link>
              </h3>
              <h3 className="l:text-xl  mt-0 text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                Software Engineer Intern
              </h3>
              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Backend development to support business requirements for
                    SolanaFM&apos;s indexing and explorer processes.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Optimizied and documentated the codebase to improve
                    developer and user experience.
                  </p>
                </li>
              </ul>
            </li>
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                September 2018 - Feburary 2019
              </time>
              <h3 className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl">
                <Link href="https://www.pbarobotics.com/" target="_blank">
                  PBA Group - Robotics & Automation
                </Link>
              </h3>
              <h3 className="l:text-xl mt-0 text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                R&D Intern
              </h3>
              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed internal applications to consolidate and automate
                    the company&apos;s processes.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Projects;
