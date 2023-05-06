import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center px-28 h-[95vh]">
      <div className="flex max-w-6xl flex-wrap">
        <h1 className="mb-2 lg:mb-0 grow text-2xl font-bold text-white md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          About Me.
        </h1>
        <div className=" grid w-full grid-cols-1 lg:grid-cols-2 place-items-center ">
          <div className="col-span-1 mt-0 md:mt-12 content-center text-sm text-ebony md:text-base lg:text-lg xl:text-xl 2xl:text-2xl pb-12 md:pb-20">
            {" "}
            I&apos;m a sophmore year Information Systems student at Singapore
            Management University, majoring in digital cloud solutions and
            business analytics. A highly motivated individual with a keen eye
            for detail, who constantly strives to improve his skills.
            <br></br>
            <br></br>I&apos;m passionate about software development, web3,
            mechanical keyboards, photography and Formula 1.
          </div>
          <div className="place-self-center relative w-full h-auto sm:w-2/4 md:w-2/4 lg:w-1/2 xl:w-3/5 lg:duration-300 ease-in-out lg:hover:scale-125">
          <Image
            className=""
            // fill={true}
              width="800"
              height="800"
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
