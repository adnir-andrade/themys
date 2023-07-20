import Button from '@/components/button';
import Head from 'next/head';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
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
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
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
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            minLength={6}
            title="Password must contain at least six characters."
            required
          />
          {/* <button type="submit">Submit</button> -> TODO: Gotta fix button bellow to have the same behavior as this one*/}
          <Button buttonLabel="Submit" goTo="/select-campaign" />
        </form>
      </main>
    </>
  );
}
