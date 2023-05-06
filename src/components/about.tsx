import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex h-[95vh] flex-col items-center justify-center px-28">
      <div className="mx-8 flex max-w-6xl flex-wrap">
        <h1 className=" mt-64 text-2xl font-bold text-white md:text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl">
          About Me.
        </h1>
        <div className=" grid w-full grid-cols-1 place-items-center lg:grid-cols-2 ">
          <div className="col-span-1 mt-4 content-center pb-8 text-sm text-ebony md:mt-8 md:pb-16 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {" "}
            I&apos;m a sophmore year Information Systems student at Singapore
            Management University, majoring in digital cloud solutions and
            business analytics. A highly motivated individual with a keen eye
            for detail, who constantly strives to improve his skills.
            <br></br>
            <br></br>I&apos;m passionate about software development, web3,
            mechanical keyboards, photography and Formula 1.
          </div>
          <div className="place-self-center">
            <Image
              className=" h-64 w-auto ease-in-out md:h-72 lg:h-96 lg:duration-300 lg:hover:scale-125"
              width={800}
              height={800}
              src="/img/keith.JPG"
              alt="keith"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
