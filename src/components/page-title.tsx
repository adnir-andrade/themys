import React from 'react';
import Image from 'next/image';
import lineLeft from '../../public/assets/icons/line-left.svg';
import lineRight from '../../public/assets/icons/line-right.svg';

type Props = {
  pageTitle: string;
};

export default function PageTitle({ pageTitle }: Props) {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-5 items-center justify-center my-10">
      <Image className="flex-none" src={lineLeft} alt="line-left" />
      <h1 className="text-dark-sepia xsm:text-5v sm:text-[28px] md:text-[36px] text-center drop-shadow-title">
        {pageTitle}
      </h1>
      <Image className="flex-none" src={lineRight} alt="line-right" />
    </div>
  );
}
