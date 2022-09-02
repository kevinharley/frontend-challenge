import React, { forwardRef } from "react";

export const Select = forwardRef(({children, ...props}, ref) => {
  return (
    <select
      className="border w-full p-2"
      ref={ref} 
      {...props}>
      {children}
    </select>
  )
});
