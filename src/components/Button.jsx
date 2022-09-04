import React from 'react';

export const Button = ({ children, onClick, type, className, ...props }) => {
  return (
    <button
      className={`border-2 border-green-500 bg-green-500 hover:bg-green-700 hover:border-green-700 text-white  p-2 mr-2 disabled:opacity-50 disabled:hover:bg-green-500 disabled:border-green-500 ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
