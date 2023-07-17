import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.png';

export default function Watermark() {
  return (
    <Image
      className="logo mix-blend-color-burn absolute h-screen object-contain animate-pulse-slow"
      src={logo}
      alt="logo"
    />
  );
}
