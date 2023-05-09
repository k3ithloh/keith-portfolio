import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";
import { useRef, useEffect } from "react";

const Experience = () => {

  return (
    <div
     
      className="flex min-h-screen flex-col items-center justify-center px-10 md:px-28 pt-10"
    >
      <div  id="experience" className="flex max-w-6xl flex-wrap">
        <h1 className="-mb-2 mt-12 text-2xl font-bold text-silverDark md:mb-4 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Where I&apos;ve Worked
        </h1>
        <div className="ml-4 py-8 md:ml-10">
          <ol className="relative border-l border-white  dark:border-white">
            <li className="mb-10 pl-12">
              <div className="absolute -left-[18px] flex rounded-full border border-white bg-gray-200 dark:border-white dark:bg-gray-700 md:-left-8">
                <Link href="https://www.tech.gov.sg/" target="_blank">
                  {/* <Image
                        className="m-1 h-6 w-auto md:h-12 animate-ping inline-flex absolute opacity-25
                        duration-300"
                        width="0"
                        height="0"
                        src="/img/govtech.svg"
                        alt="GovTech"
                      /> */}
                  {/* This is for animation ping */}
                  <Image
                    className="relative m-1 inline-flex h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/govtech.svg"
                    alt="GovTech"
                  />
                </Link>
              </div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2023 - Present
              </time>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl 
              "
              >
                <Link href="https://www.tech.gov.sg/" target="_blank">
                  GovTech - Government Digital Services
                </Link>
              </h3>
              <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                Software Engineer Intern
              </h3>
              <div className="my-4 flex flex-wrap gap-1 py-2">
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
                  content="AWS"
                  placement="bottom"
                >
                  <Image
                    className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                    width="0"
                    height="0"
                    src="/img/aws.svg"
                    alt="AWS"
                  />
                </Tooltip>
                
              </div>
            </li>
            <li className="mb-10 pl-12">
              <div className="absolute -left-[18px] rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link href="https://solana.fm/" target="_blank">
                  <Image
                    className="m-1 h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/solanafm.svg"
                    alt="SolanaFM"
                  />
                </Link>
              </div>
              <time className="mb-2 mt-2 text-sm font-normal leading-none text-jet dark:text-jet lg:text-base xl:text-lg 2xl:text-xl">
                May 2022 - August 2022
              </time>
              <h3 className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl">
                <Link href="https://solana.fm/" target="_blank">
                  SolanaFM
                </Link>
              </h3>
              <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
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
              <div className="my-4 flex flex-wrap gap-1 py-2 cursor-pointer">
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
            <li className="mb-10 pl-12">
              <div className="absolute -left-[18px] mt-0 rounded-full  border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link href="https://www.pbarobotics.com/" target="_blank">
                  <Image
                    className="m-1 h-6 w-auto md:h-12"
                    width="100"
                    height="100"
                    src="/img/pba.svg"
                    alt="PBA Group"
                  />
                </Link>
              </div>
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
              <div className="my-4 flex flex-wrap gap-1 py-2">
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
