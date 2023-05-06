import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";
import { useRef, useEffect } from 'react';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setHeight = () => {
      if (experienceRef.current) {
        experienceRef.current.style.height = `${window.innerHeight * 0.95}px`;
      }
    };

    setHeight();
    window.addEventListener('resize', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return (
    <div ref={experienceRef}
      id="experience"
      className="flex h-[95vh] flex-col items-center justify-center px-10 md:px-28"
    >
      <div className="flex max-w-6xl flex-wrap">
        <h1 className="mb-4 grow text-2xl font-bold text-white md:text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Where I&apos;ve Worked
        </h1>
        <div className="">
          <ol className="relative border-l border-white py-2 dark:border-white">
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2023 - Present
              </time>
              <h3 className="mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl 
              ">
                <Link href="https://www.tech.gov.sg/" target="_blank">
                  GovTech - Government Digital Services
                </Link>
              </h3>
              <h3 className="mt-0 text-lg font-semibold text-ebony dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl">
                Software Engineer Intern
              </h3>
              <div className="my-4 flex flex-wrap gap-1 px-2 py-2">
                <Tooltip
                  className="bg-silver"
                  content="Typescript"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/typescript.svg"
                    alt="Typescript"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="React"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/react.svg"
                    alt="React"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="Next.js"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/nextjs.svg"
                    alt="NextJS"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="Tailwind"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/tailwind.svg"
                    alt="Tailwind"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="Cypress"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/cypress.svg"
                    alt="Cypress"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="Node.js"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/nodejs.svg"
                    alt="node.js"
                  />
                </Tooltip>
              </div>
            </li>
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2022 - August 2022
              </time>
              <h3 className="mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl">
                <Link href="https://solana.fm/" target="_blank">
                  SolanaFM
                </Link>
              </h3>
              <h3 className="mt-0  text-lg font-semibold text-ebony dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl">
                Software Engineer Intern
              </h3>
              <ul className="pl-6 py-2">
                <li className="list-disc">
                  <p className="text-sm md:text-base font-normal text-jet dark:text-jet lg:text-lg xl:text-xl 2xl:text-2xl">
                    Backend development to support business requirements for
                    SolanaFM&apos;s indexing and explorer processes.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm md:text-base font-normal text-jet dark:text-jet lg:text-lg xl:text-xl 2xl:text-2xl">
                    Optimizied and documentated the codebase to improve
                    developer and user experience.
                  </p>
                </li>
              </ul>
              <div className="my-4 flex flex-wrap gap-1 px-2 py-2">
                <Tooltip
                  className="bg-silver"
                  content="Rust"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/rust.svg"
                    alt="Rust"
                  />
                </Tooltip>

                <Tooltip className="bg-silver" content="C#" placement="bottom">
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/cSharp.svg"
                    alt="C#"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content=".Net"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/dotnet.svg"
                    alt=".Net"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="Blazor"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/blazor.svg"
                    alt="Blazor"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="PostgreSQL"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/postgresql.svg"
                    alt="PostgreSQL"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content="Redis"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/redis.svg"
                    alt="Redis"
                  />
                </Tooltip>

                <Tooltip
                  className="bg-silver"
                  content="TimescaleDB"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/timescale.svg"
                    alt="TimescaleDB"
                  />
                </Tooltip>
              </div>
            </li>
            <li className="mb-10 pl-5">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="dark:text-jet mb-2 mt-2 text-sm font-normal leading-none text-jet lg:text-base xl:text-lg 2xl:text-xl">
                September 2018 - Feburary 2019
              </time>
              <h3 className="mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl">
                <Link href="https://www.pbarobotics.com/" target="_blank">
                  PBA Group - Robotics & Automation
                </Link>
              </h3>
              <h3 className="mt-0 text-lg font-semibold text-ebony dark:text-ebony l:text-xl xl:text-2xl 2xl:text-3xl">
                R&D Intern
              </h3>
              <ul className="pl-6 py-2">
                <li className="list-disc">
                  <p className="text-sm md:text-base font-normal text-jet dark:text-jet lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed internal applications to consolidate and automate
                    the company&apos;s processes.
                  </p>
                </li>
              </ul>
              <div className="my-4 flex flex-wrap gap-1 px-2 py-2">
                <Tooltip className="bg-silver" content="C#" placement="bottom">
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/cSharp.svg"
                    alt="C#"
                  />
                </Tooltip>
                <Tooltip
                  className="bg-silver"
                  content=".Net"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/dotnet.svg"
                    alt=".Net"
                  />
                </Tooltip>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
