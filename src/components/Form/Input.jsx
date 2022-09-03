import React, { forwardRef } from 'react';

export const Input = forwardRef(({ children, label, externalLabel = false, error, ...props }, ref) => {
  return (
    <div>
      <input
        className={`${props.type !== 'checkbox' ? 'border-2 p-1 w-full' : ''}`}
        ref={ref}
        placeholder={label}
        type={props.type}
        {...props}
      />
      {externalLabel && <label className="mx-3">{label}</label>}
      {error && <small className="text-red-500 text-xs">{error}</small>}
    </div>
  );
});
