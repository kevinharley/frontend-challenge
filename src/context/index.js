import { useState, createContext, useContext } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values
    }));
  };

  return (
    <FormContext.Provider value={{data, setFormValues}}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormData = () => useContext(FormContext)
