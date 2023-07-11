import React from 'react';
import Link from 'next/link';

type ButtonType = {
  buttonLabel: string;
  goTo: string;
};

const animationConfig = 'transform transition-all duration-700';

const edgesConfig = 'rounded-br-60 rounded-bl-20 rounded-tr-20 rounded-tl-60';

const bordersConfig = 'border-r-2 border-r-orange-100 border-opacity-30';

const labelConfig = 'text-4v text-dark-sepia hover:text-amber-300';

const colorConfig = 'bg-almost-black';

export default function Button({ buttonLabel, goTo }: ButtonType) {
  return (
    <Link href={goTo}>
      <button
        type="button"
        className={`w-248 h-90 shadow-4 ${colorConfig} ${animationConfig} ${edgesConfig} ${bordersConfig} ${labelConfig}`}
      >
        <span className="drop-shadow-font">{buttonLabel}</span>
      </button>
    </Link>
  );
}
