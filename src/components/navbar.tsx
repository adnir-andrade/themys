import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-almost-black sepia relative z-10 mix-blend-multiply">
      <div className="container mx-auto px-12 py-3 flex items-center justify-between">
        <div className="text-amber-200 text-2xl font-bold z-10">
          <Link href="/">Themys</Link>
        </div>
        <div className="space-x-4 text-amber-200">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
