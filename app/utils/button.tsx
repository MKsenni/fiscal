const Button = ({ name }: { name: string }) => {
  return (
    <button
      type="button"
      className="py-2 px-3 text-lime-500 border-2 rounded border-lime-500 hover:bg-lime-500 hover:text-white transition-colors shrink-0"
    >
      {name}
    </button>
  );
};

export default Button;
