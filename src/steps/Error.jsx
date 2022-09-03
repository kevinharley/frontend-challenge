import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ReactComponent as ErrorIcon } from '../icons/error.svg';

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center font-bold mb-3">Error!</h1>
      <div className="w-24 mx-auto mb-8 text-red-500">
        <ErrorIcon />
      </div>
      <p className="mb-7 text-center">Uh oh, Something went wrong. Please try again later.</p>
      <Button onClick={() => navigate('/')}>Restart</Button>
    </>
  );
};

export default Error;
