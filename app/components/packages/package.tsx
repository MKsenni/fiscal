import React from 'react';
import Button from '../button';
import Image from 'next/image';

const Package = ({
  subtitle,
  description,
  services,
}: {
  subtitle: string;
  description: string;
  services: string[];
}) => {
  return (
    <li className="rounded-lg shadow-lg w-[385px] pb-8">
      <div className="px-7 flex gap-1 items-center h-20 bg-slate-200 rounded-t-lg">
        <Image
          src="/calculator_8477820.png"
          alt="Icon by IconBaandar"
          width={57}
          height={57}
          rel="https://www.freepik.com/icon/calculator_8477820#fromView=search&term=accounting&track=ais&page=1&position=14"
        />
        <h3 className="text-lime-500 font-bold text-lg">{subtitle}</h3>
      </div>
      <div className="px-7 text-sm font-normal pt-6 h-[190px] sm:h-[173px] border-b-2 border-sky-700">
        <p>{description}</p>
      </div>
      <ul className="px-7 my-4 flex flex-col gap-2">
        {services.map((service, idx) => (
          <li key={idx} className="flex gap-2">
            <Image
              src="/check.svg"
              alt="иконка галочка"
              width={13}
              height={13}
            />
            <p>{service}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button name={'Получить стоимость'} />
      </div>
    </li>
  );
};

export default Package;
