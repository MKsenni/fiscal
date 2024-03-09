/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { calculatorBlocks } from '@/constants/constants';
import React, { FormEvent, useEffect, useState } from 'react';
import Item, { ItemDescType } from './item';
import { calculatorFunc } from '@/utils/calculatorFunc';

export type FormDataType = {
  opf: FormDataEntryValue | null;
  kind: FormDataEntryValue | null;
  personale: FormDataEntryValue | null;
  operations: FormDataEntryValue | null;
};

const FormItems = ({ update }: { update: (result: string | null) => void }) => {
  const [blocks, setBlocks] = useState(calculatorBlocks);
  // const [newBlock, setNewBlock] = useState<ItemDescType[]>();
  const [data, setData] = useState<FormDataType>();

  useEffect(() => {
    if (data) {
      const result = calculatorFunc(data);
      update(result);
      console.log('calculator', data);
    }
  }, [data]);

  const getFormData = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const opf = formData.get('opf');
    const kind = formData.get('kind');
    const personale = formData.get('personale');
    const operations = formData.get('operations');
    const data = { opf, kind, personale, operations };
    setData(data);
    console.log('getformdata', data);
  };

  return (
    <form onChange={getFormData} className="grid grid-cols-1 divide-y">
      {blocks.map((block) => (
        <Item
          key={block.title}
          block={block}
          data={data}
          // title={block.title}
          // items={block.items}
          // name={block.name}
          selectedOPF={data?.opf}
          selectedKind={data?.kind}
          // onItemChange={(items: ItemDescType[]) => {
          //   setBlocks((prev) => ({
          //     ...prev,
          //     ...prev.map((itemprev) => ({
          //       ...itemprev,
          //       items: items,
          //     }))
          //   }))
          //   setNewBlock(items)}}
        />
      ))}
    </form>
  );
};

export default FormItems;
