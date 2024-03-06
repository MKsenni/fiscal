'use client';
import { useState } from 'react';
import FormItems from './formItems';
import OrderCall from './orderCall';

const Calculator = () => {
  const [result, setResult] = useState<string | null>('4 500');
  return (
    <div className="lg:w-2/5 w-4/5 my-6 bg-white/90 rounded-lg p-8 text-lg font-bold flex flex-col gap-3 absolute right-14">
      <h2 className="text-center uppercase">
        Рассчитать стоимость бухгалтерских услуг
      </h2>
      <FormItems update={(result: string | null) => setResult(result)} />
      <div className="flex flex-wrap gap-5 text-sky-800 bg-sky-50 py-4">
        <h4 className="text-base font-medium">Стоимость услуг:</h4>
        <p>{result ? `${result} руб` : 'Неверное количество сотрудников'}</p>
      </div>
      <OrderCall />
    </div>
  );
};

export default Calculator;
