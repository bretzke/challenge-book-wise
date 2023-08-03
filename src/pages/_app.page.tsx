import { DefaultSeo } from "next-seo";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import { SessionProvider } from "next-auth/react";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "http://localhost:3000/",
          siteName: "Website Name",
        }}
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
