import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
