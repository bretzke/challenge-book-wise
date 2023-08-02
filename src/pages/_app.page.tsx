import { DefaultSeo } from "next-seo";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "http://localhost:3000/",
          siteName: "Website Name",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
