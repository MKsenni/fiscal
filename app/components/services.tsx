'use client';
import { blockService, services } from '@/constants/constants';
import Subtitle from '@/components/subtitle';
import Image from 'next/image';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import BigPopup from './popup';

const ListServices = ({ name }: { name: [string, string] }) => {
  const list = Object.entries(services);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="md:text-xl text-lg font-bold text-cyan-900 text-center">
        {name[1]}
      </h3>
      <span className="inline-block h-0.5 w-28 bg-lime-600 self-center"></span>
      <ul className="flex flex-col gap-3 justify-start">
        {list.map(
          (item) =>
            item[0] === name[0] &&
            item[1].map((service, idx) => (
              <li
                key={idx}
                className={`text-cyan-900 text-base flex py-2 px-3 justify-between ${idx % 2 !== 0 ? 'bg-lime-300/50' : ''}`}
              >
                <div>{service.name}</div>
                <div className="flex items-center gap-1">
                  <span>{service.price}</span>
                  <Image
                    src="/free-icon-font-ruble-sign-7661450.svg"
                    height={14}
                    width={14}
                    alt="значок рубля"
                  />
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

const NameBlock = ({ name }: { name: [string, string] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event) setIsOpen(true);
  };

  return (
    <div
      className="group h-full w-full flex flex-col items-center justify-center cursor-pointer p-3 shadow-lg rounded transition-transform hover:scale-110 hover:absolute hover:z-20"
      onClick={handleClick}
    >
      <div className="m-3 space-y-2.5">
        <h3 className="md:text-xl text-lg font-bold text-cyan-900">
          {name[1]}
        </h3>
        <span className="inline-block h-0.5 w-14 bg-lime-600"></span>
        <div className="flex-wrap gap-1 justify-center items-center hidden group-hover:flex">
          <p className="text-gray-600 text-sm">показать цены</p>
          <Image
            width={14}
            height={14}
            src="/free-icon-font-arrow-up-right-8540387.svg"
            alt="Uicons от <a href='https://www.flaticon.com/uicons'>Flaticon</a>"
          />
        </div>
      </div>
      {isOpen &&
        createPortal(
          <BigPopup
            onClose={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <ListServices name={name} />
          </BigPopup>,
          document.body
        )}
    </div>
  );
};

const Services = () => {
  const nameBlock = Object.entries(blockService);
  return (
    <section
      id="services"
      className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12"
    >
      <Subtitle name={'Услуги и цены'} />
      <ul className="grid min-[450px]:grid-cols-2 md:grid-cols-4 grid-cols-1 auto-rows-fr gap-5 text-center">
        {nameBlock.map((item, idx) => (
          <li
            key={idx}
            className="w-full flex flex-col justify-center items-center relative"
          >
            <NameBlock name={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
