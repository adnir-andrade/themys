import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import IMAGES from '../../public/assets/images/index';

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>;

export default function Home() {
  return (
    <>
      <Head>
        <title>Themys RPG Assistant</title>
        <link rel="icon" href="/favicon.ico" />
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

        <div className="d-flex justify-content-center align-items-center container">
          <Link href="/sign-in">
            <button
              type="button"
              className={`transform transition-all duration-700 w-248 h-90 bg-almost-black rounded-br-60 rounded-bl-20 rounded-tr-20 rounded-tl-60 shadow-4 border-r-2 border-r-orange-100 border-opacity-30 text-4v text-dark-sepia hover:text-amber-300`}
            >
              Sign In
            </button>
          </Link>
          <Link href="/log-in">
            <button type="button" className="btn btn-dark btn-lg themys-button">
              Log In
            </button>
          </Link>
        </div>

        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
          <p className="mt-2">This is a Tailwind CSS example.</p>
        </div>
      </main>
    </>
  );
}
