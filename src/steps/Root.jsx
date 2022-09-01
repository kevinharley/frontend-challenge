import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const { handleSubmit } = useForm()
  const navigate = useNavigate()

  const onSubmit = () => {
    console.log('OOF submitting');
    navigate('/more-info');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" />
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />

      <button type="submit">Next</button>
    </form>
  )
}

export default Root;
