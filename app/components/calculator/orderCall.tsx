'use client';
import React, { useState } from 'react'

const OrderCall = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = event.target.value;
    setPhoneNumber(inputPhoneNumber);
  };
  return (
    <form className="flex flex-col gap-3">
      <h4 className="text-base text-gray-500">Введите номер телефона:</h4>
      <div className='flex flex-wrap gap-4'>
        <input className="border border-gray-300 rounded-none focus:outline-none p-3 text-gray-500" type="tel" onChange={handleChange} value={phoneNumber} pattern="+7([0-9]{3})-[0-9]{3}-[0-9]{4}" placeholder='+79123456789' required/>
        <button type="submit" className="text-white border border-lime-500 bg-lime-500 hover:bg-lime-300 hover:border-lime-300/20 rounded px-6 py-3 transition-colors">Заказать</button>
      </div>
  </form>

  )
}

export default OrderCall