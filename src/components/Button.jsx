import React from "react";

export const Button = ({children, onClick, type, ...props}) => {
  return (
    <button 
      className={`border-2 p-2 mr-2`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
