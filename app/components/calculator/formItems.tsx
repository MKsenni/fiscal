'use client';
import { calculatorBlocks } from '@/constants/constants';
import React, { FormEvent, useEffect, useState } from 'react';
import Item, { ItemDescType } from './item';
import { calculatorFunc } from '@/utils/calculatorFunc';

export type FormDataType = {
  kind: FormDataEntryValue | null;
  operations: FormDataEntryValue | null;
  opf: FormDataEntryValue | null;
  personale: FormDataEntryValue | null
}

const FormItems = ({update}:{update: (result: string) => void}) => {
  const [data, setData] = useState<FormDataType>();
  // const [result, setResult] = useState('');

  const getFormData = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const opf = formData.get('opf');
    const kind = formData.get('kind');
    const personale = formData.get('personale');
    const operations = formData.get('operations');
    const result = { opf, kind, personale, operations };
    setData(result);
  };

  useEffect(() => {
    if (data) {
      const result = calculatorFunc(data);
      update(result);
      // setResult(result);
    }
  }, [data]);

  // const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
  //   const items = calculatorBlocks.map((item) => item.items).map((item) => item);
  //   if (e) {
  //     const updateChecked = items.map((item, index) => ({
  //       ...item,
  //       checked: idx === index,
  //     }))
  //     console.log(updateChecked);
  //   }
  // }

  return (
    <form onChange={getFormData} className="grid grid-cols-1 divide-y">
      {calculatorBlocks.map((block) => (
        <Item
          key={block.title}
          title={block.title}
          items={block.items}
          name={block.name}
          // submit={getFormData}
          // callback={handleRadioChange}
        />
      ))}
    </form>
  );
};

export default FormItems;
