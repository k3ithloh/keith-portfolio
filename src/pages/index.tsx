import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

import About from "~/components/about";
import Experience from "~/components/experience";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import Loading from "~/components/loading";
import Navbar from "~/components/navbar";
import Projects from "~/components/projects";
import Side from "~/components/side";
import { AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Keith Loh</title>
        <meta property="og:url" content="keithloh.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="Keith Loh" />
        <meta property="og:title" content="Keith Loh" />
        <meta
          property="og:description"
          content="Keith Loh's Personal Portfolio"
        />
        <meta name="description" content="Keith Loh's Personal Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@k3ithloh" />
        <meta name="twitter:title" content="Keith Loh" />
        <meta
          name="twitter:description"
          content="Keith Loh's Personal Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        {loading ? (
          <Loading key="loading" />
        ) : (
          <div>
            <Navbar />
            <main className="flex min-h-screen flex-col">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Side />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
      {/* <div className=""></div>
        <div className="container flex flex-col items-center justify-center">
          <div className="text">discord login</div>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div> */}
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
