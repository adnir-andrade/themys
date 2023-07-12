import React from 'react';
import Image from 'next/image';
import IMAGES from '../../public/assets/images/index';
import logo from '../../public/assets/images/logo.jpg';

export default function Watermark() {
  return (
    <Image
      className="logo mix-blend-color-burn absolute md:max-w-3xl"
      src={logo}
      alt="logo"
    />
  );
}

// "logo mix-blend-color-burn absolute object-cover"
