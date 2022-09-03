import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFormData } from '../context';
import { useGetColors } from '../hooks/useGetColors';
import { FormFieldSet, Select, Input } from '../components/Form';
import { Button } from '../components/Button';
import { SkeletonLoader } from '../components/SkeletonLoader';
import useFormPersist from 'react-hook-form-persist';

const MoreInfo = () => {
  const {
    watch,
    setValue,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const { setFormValues } = useFormData();
  const { colors } = useGetColors();

  useFormPersist('form', { watch, setValue, exclude: ['password'] });

  const onSubmit = (values) => {
    setFormValues(values);
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center font-bold">Additional Info</h1>
      {!!colors ? (
        <>
          <FormFieldSet>
            <Select
              error={errors.color?.message}
              name="color"
              {...register('color', { required: 'You must select a color to continue' })}
            >
              <option value="">Select your favourite colour</option>
              {colors?.map((color, index) => (
                <option key={`${index}-${color}`} value={color}>
                  {color}
                </option>
              ))}
            </Select>
          </FormFieldSet>
          <FormFieldSet>
            <Input
              externalLabel={true}
              label="I agree to terms and conditions"
              error={errors.terms?.message}
              type="checkbox"
              {...register('terms', { required: 'Required' })}
            />
          </FormFieldSet>
        </>
      ) : (
        // I added a skeleton loader here instead of a spinner since it is more indicitave of content loading, rather than waiting for an action
        <SkeletonLoader />
      )}
      <Button
        disabled={!colors}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>
      <Button disabled={!colors} type="submit">
        Next
      </Button>
    </form>
  );
};

export default MoreInfo;
