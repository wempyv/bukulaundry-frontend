import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return <Component {...pageProps} />;
}

export default MyApp;
