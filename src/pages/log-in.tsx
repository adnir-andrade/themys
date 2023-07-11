import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <form id="form">
                <div className="mb-3 themys-input">
                  <label htmlFor="email" className="form-label" />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    required={true}
                  />
                </div>
                <div className="mb-3 themys-input">
                  <label htmlFor="password" className="form-label" />
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    minLength={8}
                    required={true}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <Link href="/select-campaign">
                  <button className="btn btn-dark themys-button">Submit</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
