import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center">
          <Image
            className="logo"
            src="/assets/images/logo.jpg"
            alt="logo"
            width={1885}
            height={1754}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center container">
          <Link href="/sign-in">
            <button
              type="button"
              className="btn btn-dark btn-lg mb-4 themys-button"
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
      </main>
    </>
  );
}
