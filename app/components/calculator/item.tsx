export type ItemDescType = {
  desc: string;
  checked: boolean;
}

export type ItemType = {
  title: string;
  items: ItemDescType[];
  name: string;
}

const Item = ({title, items, name}: ItemType) => {
  return (
    <div className='flex flex-col gap-2 py-4'>
      <h4 className="text-base text-gray-500">{title}</h4>
      <div className="lg:flex md:grid md:grid-cols-2 md:justify-items-start items-center lg:justify-start gap-x-4 gap-y-2 flex-1">
        {
        items.map((item, idx) => (
          <label key={idx} className="flex flex-1 text-sm font-medium text-gray-500 has-[:checked]:text-sky-800">
            <input className="mr-2 checked:border-sky-800" type="radio" name={name} value={item.desc} checked={item.checked} />
            {item.desc}
          </label>
        ))
        }</div>
    </div>
  )
}

export default Item