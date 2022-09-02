import React from "react";

const FormCard = ({children}) => {
  return (
    <div className="container max-w-lg p-6 border mt-5">
      {children}
    </div>
  )
}

export default FormCard;
