import { blockService } from '@/constants/constants'
import Subtitle from '@/utils/subtitle'
import Image from 'next/image'
import React from 'react'

const NameBlock = ({name}:{name: string}) => {
  return (
      <div className='group h-full w-full flex flex-col items-center justify-center cursor-pointer p-3 shadow-lg shadow-lime-600/50 rounded transition-transform hover:scale-110 hover:absolute hover:z-20'>
        <div className='m-3 space-y-2.5'>
          <h3 className='md:text-xl text-lg font-bold text-cyan-900'>{name}</h3>
          <span className='inline-block h-0.5 w-14 bg-lime-600'></span>
          <div className='flex-wrap gap-1 justify-center items-center hidden group-hover:flex'>
            <p className='text-gray-600 text-sm'>показать цены</p>
            <Image width={14} height={14} src='/free-icon-font-arrow-up-right-8540387.svg' alt="Uicons от <a href='https://www.flaticon.com/uicons'>Flaticon</a>" />
          </div>
        </div>
    </div>
  )
}

const Services = () => {
  const nameBlock = Object.values(blockService);
  return (
    <section id='services' className="md:px-[120px] sm:px-16 px-4 my-[70px] flex flex-col gap-12">
      <Subtitle name={'Услуги и цены'} />
      <ul className='grid min-[450px]:grid-cols-2 md:grid-cols-4 grid-cols-1 auto-rows-fr gap-5 text-center'>
        {nameBlock.map((item, idx) => (
          <li key={idx} className='w-full flex flex-col justify-center items-center relative'>
            <NameBlock name={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services