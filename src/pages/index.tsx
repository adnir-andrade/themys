import Head from 'next/head';
import Image from 'next/image';
import IMAGES from '../../public/assets/images/index';
import Button from '../components/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Themys RPG Assistant</title>
        <link rel="icon" href="" />
      </Head>

      <main
        className={`flex flex-col items-center justify-center min-h-screen p-24 bg-cover`}
        style={{
          backgroundImage: `url(${IMAGES.scrollBg.src})`,
        }}
      >
        <Image
          className="logo mix-blend-color-burn absolute object-cover"
          src={`${IMAGES.logo.src}`}
          alt="logo"
          layout="fill"
        />

        <div className="grid grid-cols-1 gap-10">
          <Button buttonLabel="Sign In" goTo="sign-in" />
          <Button buttonLabel="Log In" goTo="log-in" />
        </div>
      </main>
    </>
  );
}
