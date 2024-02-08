const Button = ({
  name,
}: {
  name: string;
}) => {
  return (
    <button
      className='text-lime-500 py-3 px-5 border-spacing-1 border-2 rounded border-lime-500 hover:bg-lime-500 hover:text-white transition'
    >
      {name}
    </button>
  );
};

export default Button;
