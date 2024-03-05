const Button = ({ name }: { name: string }) => {
  return (
    <button
      type="button"
      className="py-2 px-3 text-lime-500 hover:text-white border-2 rounded border-lime-500 bg-transparent hover:bg-lime-500 shrink-0 transition-colors"
    >
      {name}
    </button>
  );
};

export default Button;
