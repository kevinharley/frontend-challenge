import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context";
import { useRequests } from "../api/requests";
import { Button } from "../components/Button";

const Confirmation = () => {
  const navigate = useNavigate()
  const { handleSubmit } = useForm()
  const { data } = useFormData()
  const { post } = useRequests()

  const onSubmit = async () => {
    const response = await post('/submit', data);

    console.log('OOF response', response)
    if (response) {
      navigate('/success');
    } else {
      navigate('/error');
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold">Confirmation</h1>
      <ul className="my-6">
        <li className="my-1">First Name: {data.name}</li>
        <li className="my-1">E-Mail: {data.email}</li>
        <li className="my-1">Password: {data.password}</li>
        <li className="my-1">Favorite Color: {data.color}</li>
        <li className="my-1">Terms and Conditions: {String(data.terms)}</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={() => { navigate(-1)}}>Back</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
    )
}

export default Confirmation;
