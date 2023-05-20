import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import IconRunnerUp from "./icons/runnerup";
import IconVmware from "./icons/vmware";
import IconWinner from "./icons/winner";

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-10 md:px-28">
      <motion.div
        id="projects"
        className="flex max-w-6xl flex-wrap"
        ref={ref}
        variants={fadeLeft}
      >
        <motion.h1 className="-mb-2 mt-12 text-2xl font-bold text-silverDark md:mb-4 md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Things I&apos;ve Built
        </motion.h1>
        <div className="ml-4 py-8 md:ml-10">
          <ol className="relative border-l border-white  dark:border-white">
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
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
              <div className=" flex flex-wrap items-center justify-start gap-x-1">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                  Team Rainbow and Unicorns
                </h3>
                <IconRunnerUp></IconRunnerUp>
              </div>

              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed GS Service Exchange, a one stop integrated
                    marketplace for GS open banking services, it allows
                    businesses to integrate their industry-standard services and
                    monitor all transactions in one place.
                  </p>
                </li>
                <Image
                  className="relative inline-flex w-3/4 object-cover py-6 lg:w-1/2"
                  width={500}
                  height={500}
                  src="/img/macbook-gsexchange.png"
                  alt="Goldman Sachs Service Exchange"
                />
                <div className="my-4 flex cursor-pointer flex-wrap gap-1 py-2">
                  <Tooltip
                    className="bg-silver "
                    content="Javascript"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/javascript.svg"
                      alt="Javascript"
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
                    content="C#"
                    placement="bottom"
                  >
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
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                August 2022
              </time>
            </motion.li>
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
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
              <div className="flex flex-wrap items-center justify-start gap-x-1">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                  GoBook
                </h3>
                <IconVmware></IconVmware>
              </div>
              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                    GoBook is a simulated booking web application with a
                    microservice architecture. It&apos;s aim is to automate
                    repeated tasks, alleviating human slips, errors and wastage.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                    Implemented real-time recommendation system using Kafka,
                    websockets, and eticketing system to users on booking
                    confirmation.
                  </p>
                </li>
                <Image
                  className="relative inline-flex w-3/4 object-cover py-6 lg:w-1/2"
                  width={500}
                  height={500}
                  src="/img/mac-gobook.png"
                  alt="GoBook"
                />
                <div className="my-4 flex cursor-pointer flex-wrap gap-1 py-2">
                  <Tooltip
                    className="bg-silver"
                    content="Javascript"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/javascript.svg"
                      alt="Javascript"
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
                    content="Flask"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/flask.svg"
                      alt="Flask"
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
                      alt="Node.js"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Express"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/express.svg"
                      alt="Express"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="MongoDB"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/mongo.svg"
                      alt="MongoDB"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Java"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/java.svg"
                      alt="Java"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Spring Boot"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/springboot.svg"
                      alt="Spring Boot"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Docker"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/docker.svg"
                      alt="Docker"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Kafka"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/kafka.svg"
                      alt="Kafka"
                    />
                  </Tooltip>
                </div>
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                April 2023
              </time>
            </motion.li>
            <motion.li
              className="mb-10 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link
                  href="https://github.com/k3ithloh/WAD2-SGXchange"
                  target="_blank"
                >
                  <Image
                    className="relative m-1 inline-flex h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/hack.svg"
                    alt=".Hack"
                  />
                </Link>
              </div>
              <h3
                className="l:text-xl mt-2 text-lg font-semibold text-ebony hover:text-white dark:text-ebony xl:text-2xl 2xl:text-3xl 
              "
              >
                <Link
                  href="https://github.com/k3ithloh/WAD2-SGXchange"
                  target="_blank"
                >
                  SMU .Hack HEAP Hackathon
                </Link>
              </h3>
              <div className="flex flex-wrap items-center justify-start gap-x-1">
                <h3 className="l:text-xl text-lg font-semibold text-ebony dark:text-ebony xl:text-2xl 2xl:text-3xl">
                  ExchangeLah!
                </h3>
                <IconWinner></IconWinner>
              </div>

              <ul className="py-2 pl-6">
                <li className="list-disc">
                  <p className="text-sm font-normal text-jet dark:text-jet md:text-base lg:w-3/4 lg:text-lg xl:text-xl 2xl:text-2xl">
                    Developed ExchangeLah! , a web application that provides a
                    platform that aims to significantly reduce the time and
                    effort required for students to find and plan their modules
                    abroad in their host university.
                  </p>
                </li>
                <Image
                  className="relative inline-flex w-3/4 object-cover py-6 md:w-4/6 "
                  width={700}
                  height={700}
                  src="/img/sgexchange-combo.png"
                  alt="ExploreLah"
                />
                <div className="my-4 flex cursor-pointer flex-wrap gap-1 py-2">
                  <Tooltip
                    className="bg-silver"
                    content="Javascript"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/javascript.svg"
                      alt="Javascript"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Vue"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/vue.svg"
                      alt="Vue"
                    />
                  </Tooltip>
                  <Tooltip
                    className="bg-silver"
                    content="Vite"
                    placement="bottom"
                  >
                    <Image
                      className="m-1 h-6 w-auto hover:animate-pulse md:h-12"
                      width="0"
                      height="0"
                      src="/img/vite.svg"
                      alt=""
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
                    content="C#"
                    placement="bottom"
                  >
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
              </ul>
              <time className="mb-2 mt-2 text-xs font-normal italic leading-none text-jet dark:text-jet lg:text-sm xl:text-base 2xl:text-lg">
                July 2022
              </time>
            </motion.li>
            <motion.li
              className="mb-10 pb-24 pl-12"
              variants={fadeLeft}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute -left-[18px] flex rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700 md:-left-8">
                <Link href="https://github.com/k3ithloh/" target="_blank">
                  <Image
                    className="relative m-1 inline-flex h-6 w-auto md:h-12"
                    width="0"
                    height="0"
                    src="/img/github-octocat.svg"
                    alt="Github"
                  />
                </Link>
              </div>
              <h3
                className="l:text-xl text-lg font-semibold text-ebony hover:text-white dark:text-ebony md:pt-3 xl:text-2xl 2xl:text-3xl
              "
              >
                <Link href="https://github.com/k3ithloh/" target="_blank">
                  More projects on my Github! @k3ithloh
                </Link>
              </h3>
            </motion.li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
