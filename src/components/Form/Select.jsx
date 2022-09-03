import React, { forwardRef } from 'react';

export const Select = forwardRef(({ children, error, ...props }, ref) => {
  return (
    <>
      <select className="border w-full p-2" ref={ref} {...props}>
        {children}
      </select>
      {error && <small className="text-red-500 text-xs">{error}</small>}
    </>
  );
});
