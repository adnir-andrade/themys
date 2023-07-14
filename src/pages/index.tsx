import Head from 'next/head';
import Header from '@/components/header';
import Watermark from '@/components/watermark';
import Button from '../components/button';
import Footer from '@/components/footer';
import BurnMarks from '@/components/burn-marks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Themys RPG Assistant</title>
        <link rel="icon" href="" />
      </Head>
      <Header />

      <main
        className={`flex flex-col items-center justify-center min-h-screen p-t-24 bg-cover`}
      >
        <Watermark />

        <div className="grid grid-cols-1 gap-10">
          <Button buttonLabel="Sign In" goTo="sign-in" />
          <Button buttonLabel="Log In" goTo="log-in" />
        </div>
      </main>
      <BurnMarks isBottom={true} />
      <Footer />
    </>
  );
}
