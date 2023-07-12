import Head from 'next/head';
import Watermark from '@/components/watermark';
import Button from '../components/button';
import IMAGES from '../../public/assets/images/index';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Themys RPG Assistant</title>
        <link rel="icon" href="" />
        <Navbar />
      </Head>

      <main
        className={`flex flex-col items-center justify-center min-h-screen p-t-24 bg-cover`}
      >
        <Watermark />

        <div className="grid grid-cols-1 gap-10">
          <Button buttonLabel="Sign In" goTo="sign-in" />
          <Button buttonLabel="Log In" goTo="log-in" />
        </div>
      </main>
      <Footer />
    </>
  );
}
