import { promos } from '@/constants/constants';
import Subtitle from '@/utils/subtitle';
import Image from 'next/image';
import React from 'react';

const Promo = () => {
  return (
    <section id='promos' className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12">
      <Subtitle name={'Акции'} />
      <ul className="flex flex-wrap gap-5 justify-center">
        {promos.map((item) => (
          <li className="flex flex-col gap-3 sm:w-2/4 md:flex-1 w-3/4 rounded-lg overflow-hidden" key={item.title}>
            <Image width={320} height={300} src={item.src} alt={item.title} />
            <p className='font-medium'>{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Promo;
