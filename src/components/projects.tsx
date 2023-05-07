import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";
import { useRef, useEffect } from "react";
import IconRunnerUp from "./icons/runnerup";
import IconVmware from "./icons/vmware";

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
        <h1 className="-mb-2 mt-12 grow text-2xl font-bold text-white md:mb-4 md:text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Things I&apos;ve Built
        </h1>
        <div className="ml-4 py-8 md:ml-10">
          <ol className="relative border-l border-white  dark:border-white">
            <li className="mb-10 pl-12">
              <div className="absolute -left-[18px] mt-0 flex rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link
                  href="https://github.com/k3ithloh/gs-service-exchange"
                  target="_blank"
                >
                  <Image
                    className="relative m-1 inline-flex h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/ellipsis.svg"
                    alt="Ellipsis"
                  />
                </Link>
              </div>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl 
              "
              >
                <Link
                  href="https://github.com/k3ithloh/gs-service-exchange"
                  target="_blank"
                >
                  Elipsis 2022 Hackathon by Goldman Sachs
                </Link>
              </h3>
              <div className="mt-1 flex items-center justify-start">
                <h3 className="l:text-xl mt-0 text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                  Team Rainbow and Unicorns
                </h3>
                <IconRunnerUp></IconRunnerUp>
              </div>

              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed GS Service Exchange, a one stop integrated
                    marketplace for GS open banking services, it allows
                    businesses to integrate their industry-standard services and
                    monitor all transactions in one place.
                  </p>
                </li>
                <Image
                  className="relative mx-4 my-6 inline-flex h-auto w-auto"
                  width={400}
                  height={400}
                  src="/img/macbook-gsexchange.png"
                  alt="Goldman Sachs Service Exchange"
                />
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                August 2022
              </time>
            </li>
            <li className="mb-10 pl-12">
              <div className="absolute -left-[18px] mt-0 flex rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link href="https://github.com/k3ithloh/GoBook" target="_blank">
                  <Image
                    className="relative m-1 inline-flex h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/smu-round.svg"
                    alt="SMU"
                  />
                </Link>
              </div>
              <h3 className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl">
                <Link href="https://github.com/k3ithloh/GoBook" target="_blank">
                  IS213 Enterprise Solution Development
                </Link>
              </h3>
              <div className="mt-1 flex items-center justify-start">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                  GoBook
                </h3>
                <IconVmware></IconVmware>
              </div>
              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    GoBook is a simulated booking web application with a
                    microservice architecture
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    GoBook&apos;s aim is to automate repeated tasks, alleviating
                    human slips, errors and wastage
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    Implemented emailing and eticketing system to users
                  </p>
                </li>
                <Image
                  className="relative mx-4 my-6 inline-flex h-auto w-auto"
                  width={400}
                  height={400}
                  src="/img/mac-gobook.png"
                  alt="GoBook"
                />
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                April 2023
              </time>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Projects;
