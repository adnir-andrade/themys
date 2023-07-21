import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-almost-black sepia z-10 mix-blend-multiply py-3 flex items-center justify-between px-5">
      <div className="text-amber-200 text-2xl font-bold z-10 sm:basis-2/3">
        <Link className="text-[20px]" href="/">
          Themys
        </Link>
      </div>
      <div className="text-amber-200 xsm:space-x-3 sm:space-x-7">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
