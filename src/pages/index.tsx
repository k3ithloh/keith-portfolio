import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Side from "~/components/side";
import Hero from "~/components/hero";
import About from "~/components/about";
import Experience from "~/components/experience";
import Projects from "~/components/projects";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Keith Loh</title>
        <meta name="description" content="Keith's Portfolio Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Navbar></Navbar>
      <main className="flex flex-col min-h-screen">
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Side></Side>
        {/* <div className=""></div>
        <div className="container flex flex-col items-center justify-center">
          <div className="text">discord login</div>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div> */}
      </main>
      <Footer></Footer>
      </div>
      
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
