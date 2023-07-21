import React from 'react';
import BurnMarks from './burn-marks';
import Navbar from './navbar';

export default function Header() {
  return (
    <header>
      <BurnMarks isBottom={false} />
      <Navbar />
    </header>
  );
}
