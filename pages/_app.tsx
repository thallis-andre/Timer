/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thallis & Beatriz  ❤️</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="title" content="Thallis & Beatriz  ❤️" />
        <meta
          name="description"
          content="Para finalmente você ser minha namorada"
        />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="Thallis & Beatriz  ❤️" />
        <meta
          property="og:description"
          content="Para finalmente você ser minha namorada"
        />
        <meta property="og:image" content="../public/FullLogo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
        <meta property="twitter:title" content="Thallis & Beatriz  ❤️" />
        <meta
          property="twitter:description"
          content="Para finalmente você ser minha namorada"
        />
        <meta property="twitter:image" content="../public/FullLogo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
