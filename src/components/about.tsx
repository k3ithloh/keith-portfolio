
const About = () => {
  return (
    <div id="about" className="flex flex-col items-center">
      <div className="mx-8 flex flex-wrap mt-28 w-full max-w-6xl">
        <h1 className="mt-64 mb-4 font-bold text-2xl md:text-6xl text-white lg:text-6xl xl:text-7xl grow ml-8">About Me.</h1>
        <div className="w-full grid grid-cols-2 -mt-20">
          <div className="col-span-1 text-base md:text-lg text-ebony lg:text-xl xl:text-2xl content-center mt-28 ml-8"> I&apos;m a sophmore year Information Systems student at Singapore Management University, majoring in digital cloud solutions  and business analytics. A highly motivated individual with a keen eye for detail, who constantly strives to improve his skills.
          <br></br><br></br>I&apos;m passionate about software development, web3, mechanical keyboards, photography and Formula 1.
          <br></br> <br></br> Here are the technologies I&apos;ve been working with 
          <br></br><br></br>
            <div className="grid grid-cols-6 gap-6 ">
              <img className="hover:animate-bounce h-12" src="/img/javascript.svg" alt="JS" />
              <img className="hover:animate-bounce h-12" src="/img/typescript.svg" alt="TS" />
              <img className="hover:animate-bounce h-12" src="/img/rust.svg" alt="Rust" />
              <img className="hover:animate-bounce h-12" src="/img/react.svg" alt="React" />
              <img className="hover:animate-bounce h-12" src="/img/vue.svg" alt="Vue" />
              <img className="hover:animate-bounce h-12" src="/img/nextjs.svg" alt="NextJS" />
              <img className="hover:animate-bounce h-12" src="/img/nodejs.svg" alt="NodeJS" />
              <img className="hover:animate-bounce h-12" src="/img/express.svg" alt="Express" />
              <img className="hover:animate-bounce h-12" src="/img/puppeteer.svg" alt="Puppeteer" />
              <img className="hover:animate-bounce h-12" src="/img/python.svg" alt="Python" />
              <img className="hover:animate-bounce h-12" src="/img/flask.svg" alt="Flask" />
              <img className="hover:animate-bounce h-12" src="/img/dotnet.svg" alt="DotNet" />
              <img className="hover:animate-bounce h-12" src="/img/tailwind.svg" alt="Tailwind CSS" />
              <img className="hover:animate-bounce h-12" src="/img/bootstrap.svg" alt="Bootstrap" />
              <img className="hover:animate-bounce h-12" src="/img/html-5.svg" alt="HTML-5" />
              <img className="hover:animate-bounce h-12" src="/img/css-3.svg" alt="CSS-3" />
              <img className="hover:animate-bounce h-12" src="/img/docker.svg" alt="Docker" />
              <img className="hover:animate-bounce h-12" src="/img/rabbitmq.svg" alt="RabbitMq" />
              <img className="hover:animate-bounce h-12" src="/img/postgresql.svg" alt="Postgresql" />
              <img className="hover:animate-bounce h-12" src="/img/mysql.svg" alt="MySQL" />
              <img className="hover:animate-bounce h-12" src="/img/mongo.svg" alt="Mongo" />
              <img className="hover:animate-bounce h-12" src="/img/firebase.svg" alt="Firebase" />
              <img className="hover:animate-bounce h-12" src="/img/figma.svg" alt="Figma" />
              <img className="hover:animate-bounce h-12" src="/img/vercel.svg" alt="Vercel" />
            </div>
          </div>
            <img className="ml-12 scale-75 hover:scale-90 ease-in-out duration-300" src="/img/keith.JPG" alt="keith" />
        </div>
      </div>
    </div>
  );
};

export default About;
