const Subtitle = ({
  name,
}: {
  name: string;
}) => {
  return (
    <div>
      <h2
        className='text-2xl font-subtitle sm:text-subtitle text-center'
      >
        {name}
      </h2>
    </div>
  );
};

export default Subtitle;
