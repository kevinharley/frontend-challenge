import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

const MoreInfo = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log('oof submitting colors')
    navigate('/success');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="colors" >
        <option value="color1">color 1</option>
        <option value="color2">color 2</option>
        <option value="color3">color 3</option>
      </select>
      <input type="checkbox" />
      <label htmlFor="checkbox"> I agree to terms and conditions</label>

      <button type="submit">Next</button>
    </form>

  )
}

export default MoreInfo;
