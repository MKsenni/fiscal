import React from 'react';

const Reason = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h3 className="text-xs lg:text-base font-bold">{title}</h3>
      <div className="h-0.5 w-14 bg-lime-600"></div>
      <p>{description}</p>
    </>
  );
};

export default Reason;
