import React from 'react';
import BurnMarks from './burn-marks';
import Navbar from './navbar';

const Header = () => {
  return (
    <header>
      <BurnMarks isBottom={false} />
      <Navbar />
    </header>
  );
};

export default Header;
