import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="mx-8 mt-28 flex w-full max-w-6xl flex-wrap">
        <h1 className="mb-4 ml-8 mt-64 grow text-2xl font-bold text-white md:text-6xl lg:text-6xl xl:text-7xl">
          About Me.
        </h1>
        <div className="-mt-20 grid w-full grid-cols-2">
          <div className="col-span-1 ml-8 mt-28 content-center text-base text-ebony md:text-lg lg:text-xl xl:text-2xl">
            {" "}
            I&apos;m a sophmore year Information Systems student at Singapore
            Management University, majoring in digital cloud solutions and
            business analytics. A highly motivated individual with a keen eye
            for detail, who constantly strives to improve his skills.
            <br></br>
            <br></br>I&apos;m passionate about software development, web3,
            mechanical keyboards, photography and Formula 1.
            <br></br> <br></br> Here are the technologies I&apos;ve been working
            with
            <br></br>
            <br></br>
            <div className="grid grid-cols-6 gap-6 ">
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/javascript.svg"
                alt="JS"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/typescript.svg"
                alt="TS"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/rust.svg"
                alt="Rust"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/react.svg"
                alt="React"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/vue.svg"
                alt="Vue"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/nextjs.svg"
                alt="NextJS"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/nodejs.svg"
                alt="NodeJS"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/express.svg"
                alt="Express"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/puppeteer.svg"
                alt="Puppeteer"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/python.svg"
                alt="Python"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/flask.svg"
                alt="Flask"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/dotnet.svg"
                alt="DotNet"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/tailwind.svg"
                alt="Tailwind CSS"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/bootstrap.svg"
                alt="Bootstrap"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/html-5.svg"
                alt="HTML-5"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/css-3.svg"
                alt="CSS-3"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/docker.svg"
                alt="Docker"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/rabbitmq.svg"
                alt="RabbitMq"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/postgresql.svg"
                alt="Postgresql"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/mysql.svg"
                alt="MySQL"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/mongo.svg"
                alt="Mongo"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/firebase.svg"
                alt="Firebase"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/figma.svg"
                alt="Figma"
              />
              <Image
                className="h-12 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/vercel.svg"
                alt="Vercel"
              />
            </div>
          </div>
          <Image
            className="ml-12 scale-75 duration-300 ease-in-out hover:scale-90"
            width={800}
            height={800}
            src="/img/keith.JPG"
            alt="keith"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
