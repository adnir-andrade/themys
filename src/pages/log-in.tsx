import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/button';

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
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    required={true}
                  />
                </div>
                <div className="mb-3">
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
                <Button buttonLabel="Submit" goTo="/select-campaign" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
