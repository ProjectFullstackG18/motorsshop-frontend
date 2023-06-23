// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return <Component {...pageProps} />;
}

export default App;
