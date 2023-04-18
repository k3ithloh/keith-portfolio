import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Nunito } from 'next/font/google';
import Navbar from "~/components/navbar";

import { api } from "~/utils/api";
import "~/styles/globals.css";

// add Nunito font
const nunito = Nunito({ subsets: ['latin'] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={nunito.className}>
    <SessionProvider session={session}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </SessionProvider>
    </main>
    
  );
};

export default api.withTRPC(MyApp);
