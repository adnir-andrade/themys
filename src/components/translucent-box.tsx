import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TranslucentContainer = ({ children }: Props) => {
  return (
    <div className="h-4/5 xsm:w-full sm:w-auto bg-semi-transparent-black rounded-t-[20px] rounded-b-xl mb-10">
      {children}
    </div>
  );
};

export default TranslucentContainer;
