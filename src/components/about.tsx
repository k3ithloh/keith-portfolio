import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center px-32">
      <div className="mx-8 mt-10 flex w-full max-w-6xl flex-wrap">
        <h1 className="mb-4 ml-8 mt-64 grow text-2xl font-bold text-white md:text-6xl lg:text-6xl xl:text-7xl">
          About Me.
        </h1>
        <div className="-mt-20 grid w-full grid-cols-2 place-items-center">
          <div className="col-span-1 ml-8 mt-20 md:mt-28 content-center text-xs text-ebony md:text-base lg:text-lg xl:text-2xl">
            {" "}
            I&apos;m a sophmore year Information Systems student at Singapore
            Management University, majoring in digital cloud solutions and
            business analytics. A highly motivated individual with a keen eye
            for detail, who constantly strives to improve his skills.
            <br></br>
            <br></br>I&apos;m passionate about software development, web3,
            mechanical keyboards, photography and Formula 1.
            {/* <br></br> <br></br> Here are the technologies I&apos;ve been working
            with */}
            <br></br>
            <br></br>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6  ">
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/javascript.svg"
                alt="JS"
                title="Javascript"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/typescript.svg"
                alt="TS"
                title="Typescript"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/rust.svg"
                alt="Rust"
                title="Rust"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/react.svg"
                alt="React"
                title="React"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/vue.svg"
                alt="Vue"
                title="Vue"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/nextjs.svg"
                alt="NextJS"
                title="Next"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/nodejs.svg"
                alt="NodeJS"
                title="NodeJS"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/express.svg"
                alt="Express"
                title="Express"
              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/puppeteer.svg"
                alt="Puppeteer"
                title="Puppeteer"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/python.svg"
                alt="Python"
                title="Python"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/flask.svg"
                alt="Flask"
                title="Flask"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/dotnet.svg"
                alt="DotNet"
                title="DotNet"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/tailwind.svg"
                alt="Tailwind CSS"
                title="Tailwind"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/bootstrap.svg"
                alt="Bootstrap"
                title="Bootstrap"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/html-5.svg"
                alt="HTML-5"
                title="HTML-5"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/css-3.svg"
                alt="CSS-3"
                title="CSS-3"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/docker.svg"
                alt="Docker"
                title="Docker"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/rabbitmq.svg"
                alt="RabbitMq"
                title="RabbitMQ"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/postgresql.svg"
                alt="Postgresql"
                title="Postgresql"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/mysql.svg"
                alt="MySQL"
                title="MySQL"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/mongo.svg"
                alt="Mongo"
                title="Mongo"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/firebase.svg"
                alt="Firebase"
                title="Firebase"

              />
              <Image
                className="h-6 xl:h-12 md:h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/figma.svg"
                alt="Figma"
                title="Figma"

              />
              <Image
                className="h-6 xl:h-12 h-10 hover:animate-bounce"
                width={200}
                height={200}
                src="/img/vercel.svg"
                alt="Vercel"
                title="Vercel"

              />
            </div> */}
          </div>
          <div className="place-self-center">
          <Image
            className="ml-10 scale-75 duration-300 ease-in-out hover:scale-90"
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
