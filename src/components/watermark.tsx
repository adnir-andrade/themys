import React from 'react';
import Image from 'next/image';
import IMAGES from '../../public/assets/images/index';
import logo from '../../public/assets/images/logo.jpg';

export default function Watermark() {
  return (
    <Image
      className="logo mix-blend-color-burn absolute w-auto"
      src={logo}
      alt="logo"
    />
  );
}

// "logo mix-blend-color-burn absolute object-cover"
