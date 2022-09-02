import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useFormData } from "../context";
import { useRequests } from "../api/requests";
import { FormFieldSet, Select } from "../components/Form";
import { Button } from '../components/Button'

const MoreInfo = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { getColors } = useRequests();
  const { setFormValues } = useFormData();
  const [colors, setColors] = useState();

  const hydrateColors = async () => {
    const colors = await getColors()
    setColors(colors)
  }

  useEffect(() => {
    if (!colors?.length) {
      hydrateColors()
    }
  }, [colors])

  const onSubmit = (values) => {
    setFormValues(values);
    navigate('/confirmation');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center font-bold">Additional Info</h1>
      <FormFieldSet>
        <Select name="color" {...register("color")}>
          {colors?.map((color, index) => 
            <option key={`${index}-${color}`} value={color}>{color}</option>
          )}
        </Select>
      </FormFieldSet>
      <FormFieldSet>
        <input type="checkbox" {...register("terms")}/>
        <label htmlFor="checkbox"> I agree to terms and conditions</label>
      </FormFieldSet>

      <Button onClick={() => { navigate(-1) }}>Back</Button>
      <Button type="submit">Next</Button>
    </form>

  )
}

export default MoreInfo;
