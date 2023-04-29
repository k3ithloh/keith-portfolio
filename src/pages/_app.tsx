import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
// import { Nunito } from 'next/font/google';
import localFont from 'next/font/local';
import Navbar from "~/components/navbar";

import { api } from "~/utils/api";
import "~/styles/globals.css";

// add Nunito font
// const nunito = Nunito({ subsets: ['latin'] });

// add CustomFont
const askpekta = localFont({
  src: '../font/AspektaVF.ttf',
  display: 'swap'
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={askpekta.className}>
    <SessionProvider session={session}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </SessionProvider>
    </main>
    
  );
};

export default api.withTRPC(MyApp);
