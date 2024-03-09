'use client';
import { calculatorFunc } from '@/utils/calculatorFunc';
import { useEffect, useState } from 'react';
import { FormDataType } from './formItems';

export type ItemDescType = {
  desc: string;
  checked: boolean;
  isIP: boolean;
  isOOO: boolean;
  isOSNO: boolean;
};

export type ItemType = {
  title: string;
  items: ItemDescType[];
  name: string;
};

const Item = ({
  block,
  data,
  // title,
  // items,
  // name,
  selectedOPF,
  selectedKind,
  // onItemChange,
}: {
  block: ItemType,
  data: FormDataType | undefined,
  // title: string;
  // items: ItemDescType[];
  // name: string;
  selectedOPF?: FormDataEntryValue | null | 'string',
  selectedKind?: FormDataEntryValue | null | 'string',
  // onItemChange: (items: ItemDescType[]) => void;
}) => {
  console.log('item render');

  const [selectedValue, setSelectedValue] = useState('');

  const [formData, setFormData] = useState(data);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    blockname: string
  ) => {
    if (event) {
      const value = event.currentTarget.value;
      setSelectedValue(value);
      if(formData) setFormData({ ...formData, [blockname]: value });

      // onItemChange(items.map((item) => ({
      //   ...item,
      //   checked: event.currentTarget.value === item.desc,
      // })));
    }
  };

  useEffect(() => {
    if(formData) {
      const result = calculatorFunc(formData);
      console.log('result', result);
      console.log('formdata from item', formData);
    }
  }, [formData])

  return (
    <div className="flex flex-col gap-2 py-4">
      <h4 className="text-base text-gray-500">{block.title}</h4>
      <div className="lg:flex md:grid md:grid-cols-2 md:justify-items-start items-center lg:justify-start gap-x-4 gap-y-2 flex-1">
        {block.items.map((item, idx) => {
          if (
            (block.name === 'opf' && item.isIP && item.isOOO && item.isOSNO) ||
            (block.name === 'kind' && item.isIP && item.isOOO && item.isOSNO) ||
            (block.name === 'personale' && selectedOPF === 'Общество с ограниченной ответственностью' ? selectedKind === 'ОСНО' ? item.isOSNO : item.isOOO : item.isIP) ||
            (block.name === 'operations' &&
              item.isIP &&
              item.isOOO &&
              item.isOSNO)
          ) {
            return (
              <label
                key={idx}
                className="flex flex-1 text-sm font-medium text-gray-500 has-[:checked]:text-sky-800"
              >
                <input
                  className="mr-2 checked:border-sky-800"
                  type="radio"
                  name={block.name}
                  value={item.desc}
                  // defaultChecked={item.checked}
                  onChange={(e) => handleChange(e, block.name)}
                  checked={
                    selectedValue ? selectedValue === item.desc : item.checked
                  }
                  // onChange={handleChange}
                />
                {item.desc}
              </label>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Item;
