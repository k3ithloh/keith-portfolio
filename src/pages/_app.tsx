import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import Side from "~/components/side";
import Hero from "~/components/hero";
import About from "~/components/about";
import Experience from "~/components/experience";
import Projects from "~/components/projects";
import { Analytics } from "@vercel/analytics/react";

import { api } from "~/utils/api";
import "~/styles/globals.css";

// add CustomFont
const askpekta = localFont({
  src: "../font/AspektaVF.ttf",
  display: "swap",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={askpekta.className}>
      <SessionProvider session={session}>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Component {...pageProps} />
        <Projects></Projects>
        <Analytics />
        <Side></Side>
        <Footer></Footer>
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
