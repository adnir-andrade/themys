import React from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';
import { cinzelDecorative700 } from '../util/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${cinzelDecorative700.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
