import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.jpg';

export default function Watermark() {
  return (
    <Image
      className="logo mix-blend-color-burn absolute h-screen object-contain"
      src={logo}
      alt="logo"
    />
  );
}

// "logo mix-blend-color-burn absolute object-cover"  md:max-w-3xl
