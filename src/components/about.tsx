import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center px-32">
      <div className="mx-8 mt-20 flex w-full max-w-6xl flex-wrap">
        <h1 className="mb-4 ml-8 mt-64 grow text-5xl font-bold text-white md:text-6xl lg:text-6xl xl:text-7xl">
          About Me.
        </h1>
        <div className="-mt-20 grid w-full grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="col-span-1 ml-8 mt-20 md:mt-28 content-center text-sm text-ebony md:text-base lg:text-lg xl:text-2xl">
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
            className="mt-10 h-64 w-auto md:h-72 lg:mt-0 lg:h-96 lg:ml-16 lg:duration-300 ease-in-out lg:hover:scale-125"
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
