import React from 'react';
import Image from 'next/image';
import IMAGES from '../../public/assets/images/index';

export default function Watermark() {
  return (
    <Image
      className="logo mix-blend-color-burn absolute object-cover"
      src={`${IMAGES.logo.src}`}
      alt="logo"
      layout="fill"
    />
  );
}
