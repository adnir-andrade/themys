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
        className={`flex min-h-screen flex-col items-center justify-between p-24 bg-cover relative`}
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

        <div className="">
          <Button buttonLabel="Sign In" goTo="sign-in" />
          <Button buttonLabel="Log In" goTo="log-in" />
        </div>
      </main>
    </>
  );
}
