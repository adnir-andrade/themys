import React from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';
import { cinzelDecorative700 } from '../util/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BurnMarks from '@/components/burn-marks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${cinzelDecorative700.style.fontFamily};
        }
      `}</style>

      <Header />
      <Component {...pageProps} />
      <BurnMarks isBottom={true} />
      <Footer />
    </>
  );
}

export default MyApp;
