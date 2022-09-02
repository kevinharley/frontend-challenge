import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context";
import { FormFieldSet } from "../components/Form";
import { Button } from "../components/Button";

const Root = () => {
  const { handleSubmit, formState: { errors}, register } = useForm()
  const navigate = useNavigate()
  const { setFormValues } = useFormData()

  const onSubmit = (values) => {
    setFormValues(values)
    navigate('/more-info');
  }

  return (
    <>
      <h1 className="text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldSet>
          <input className="border-2 p-1 w-full" placeholder="First Name" type="text" {...register("name", {
            required: true
          })} />
        </FormFieldSet>

        <FormFieldSet>
          <input className="border-2 p-1 w-full" placeholder="Email" type="email" {...register("email", {
            required: true
          })} />
        </FormFieldSet>

        <FormFieldSet>
          <input className="border-2 p-1 w-full" placeholder="Password" type="password" {...register("password", {
            required: true
          })} />
        </FormFieldSet>
        <Button type="submit">Next</Button>
      </form>
    </>
  )
}

export default Root;
