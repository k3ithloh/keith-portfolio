import Image from "next/image";

const About = () => {
  return (
<<<<<<< HEAD
    <div id="about" className="flex flex-col items-center px-32">
      <div className="mx-8 mt-20 flex w-full max-w-6xl flex-wrap">
        <h1 className="mb-4 ml-8 mt-64 grow text-5xl font-bold text-white md:text-6xl lg:text-6xl xl:text-7xl">
=======
    <div id="about" className="flex flex-col justify-center items-center px-10 h-[95vh]">
      <div className="flex max-w-6xl flex-wrap">
        <h1 className="mb-2 lg:mb-0 grow text-2xl font-bold text-white md:text-4xl lg:text-6xl xl:text-7xl">
>>>>>>> main
          About Me.
        </h1>
        <div className=" grid w-full grid-cols-1 lg:grid-cols-2 place-items-center ">
          <div className="col-span-1 mt-0 md:mt-12 content-center text-sm text-ebony md:text-base lg:text-lg xl:text-xl pb-12 md:pb-20">
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
            className=" h-64 w-auto md:h-72 lg:h-96 lg:duration-300 ease-in-out lg:hover:scale-125"
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
