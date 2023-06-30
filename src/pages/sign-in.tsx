import Image from 'next/image';
import Link from 'next/link';

export default function signIn() {
  return (
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
                  pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                  autoFocus={true}
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
                  min={8}
                  required={true}
                />
              </div>
              <div className="mb-5 themys-input">
                <label htmlFor="confirmPassword" className="form-label" />
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  min={8}
                  required={true}
                />
              </div>
              <Link href="/select-campaign">
                <button className="btn btn-dark themys-button">Sign Up</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
