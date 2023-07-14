import React from 'react';

type Props = {
  isBottom: boolean;
};

export default function BurnMarks({ isBottom }: Props) {
  let gradientDirection = 'bg-gradient-to-b absolute';

  if (isBottom) {
    gradientDirection = 'bg-gradient-to-t bottom-0 fixed';
  }

  return (
    <span
      className={`h-28 w-full mix-blend-overlay ${gradientDirection} bg-gradient-to-b from-black to-transparent`}
    ></span>
  );
}
