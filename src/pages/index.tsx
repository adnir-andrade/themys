import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center">
        <Image
          className="logo"
          src="/assets/images/logo.jpg"
          alt="logo"
          width={800}
          height={500}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center container">
        <button
          type="button"
          className="btn btn-dark btn-lg mb-4 themys-button"
        >
          Sign In
        </button>
        <button type="button" className="btn btn-dark btn-lg themys-button">
          Log In
        </button>
      </div>
    </main>
  );
}
