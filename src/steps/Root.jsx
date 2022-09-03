import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context';
import { FormFieldSet, Input } from '../components/Form';
import { Button } from '../components/Button';
import useFormPersist from 'react-hook-form-persist';

const Root = () => {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
    register
  } = useForm();
  const navigate = useNavigate();
  const { setFormValues } = useFormData();

  useFormPersist('form', { watch, setValue, exclude: ['password'] });

  const onSubmit = (values) => {
    setFormValues(values);
    navigate('/more-info');
  };

  return (
    <>
      <h1 className="text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldSet>
          <Input
            type="text"
            error={errors.name?.message}
            label="First Name"
            {...register('name', {
              required: 'First Name Required'
            })}
          />
        </FormFieldSet>

        <FormFieldSet>
          <Input
            type="email"
            error={errors.email?.message}
            label="Email"
            {...register('email', {
              required: 'Email Required'
            })}
          />
        </FormFieldSet>

        <FormFieldSet>
          <Input
            type="password"
            error={errors.password?.message}
            label="Password"
            {...register('password', {
              required: 'Password Required'
            })}
          />
        </FormFieldSet>
        <Button type="submit">Next</Button>
      </form>
    </>
  );
};

export default Root;
