import { calculatorBlocks } from '@/constants/constants'
import React from 'react'
import Item from './item'

const FormItems = () => {
  return (
    <form className='grid grid-cols-1 divide-y'>
      {
        calculatorBlocks.map((block) => (
          <Item key={block.title} title={block.title} items={block.items} name={block.name} />
        ))
      }
    </form>
  )
}

export default FormItems