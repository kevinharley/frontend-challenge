import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../context';
import { useRequests } from '../hooks/useRequests';
import { Button } from '../components/Button';
import { ReactComponent as Spinner } from '../icons/spinner.svg';

const Confirmation = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const { data } = useFormData();
  const { post } = useRequests();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    setIsSubmitting(true);
    const response = await post('/submit', data);

    if (response.status === 200) {
      navigate('/success');
      setIsSubmitting(false);
    } else {
      navigate('/error');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold">Confirmation</h1>
      <ul className="my-6">
        <li className="my-1">First Name: {data.name}</li>
        <li className="my-1">E-Mail: {data.email}</li>
        <li className="my-1">Password: {String(data.password).replace(/./g, '*')}</li>
        <li className="my-1">Favorite Color: {data.color}</li>
        <li className="my-1">Terms and Conditions: {String(data.terms)}</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <Button
            disabled={isSubmitting}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <Button type="submit" disabled={isSubmitting} className="min-w-[77px] min-h-[44px]">
            {isSubmitting ? <Spinner /> : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Confirmation;
