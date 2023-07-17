import Head from 'next/head';
import Button from '@/components/button';

export default function LogIn() {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <form
          action="/select-campaign"
          method="post"
          className="flex flex-col gap-4 w-64 mt-44 mb-44 justify-center"
        >
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            title="Insert a valid e-mail"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            minLength={6}
            title="Password must contain at least six characters."
            required
          />
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          {/* <button type="submit">Submit</button> -> TODO: Gotta fix button bellow to have the same behavior as this one*/}
          <Button buttonLabel="Submit" goTo="/select-campaign" />
        </form>
      </main>
    </>
  );
}
