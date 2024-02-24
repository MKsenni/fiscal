import { chooseItems } from '@/constants/constants';
import Subtitle from '@/utils/subtitle';
import React from 'react';
import Reason from './reason';

const Choose = () => {
  return (
    <section className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12">
      <Subtitle name={'Почему работают с нами ?'} />
      <ul className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-center gap-2">
        {chooseItems.map((item) => (
          <li
            className="flex flex-col items-center text-center bg-lime-100 px-4 py-6 gap-2 flex-1"
            key={item.title}
          >
            <Reason title={item.title} description={item.description} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Choose;
