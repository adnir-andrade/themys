import React from 'react';
import Link from 'next/link';

type ButtonType = {
  buttonLabel: string;
  goTo: string;
};

export default function Button({ buttonLabel, goTo }: ButtonType) {
  return (
    <Link href={goTo}>
      <button
        type="button"
        className={`transform transition-all duration-700 w-248 h-90 bg-almost-black rounded-br-60 rounded-bl-20 rounded-tr-20 rounded-tl-60 shadow-4 border-r-2 border-r-orange-100 border-opacity-30 text-4v text-dark-sepia hover:text-amber-300`}
      >
        <span className="drop-shadow-font">{buttonLabel}</span>
      </button>
    </Link>
  );
}
