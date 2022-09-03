import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ReactComponent as Checkmark } from '../icons/checkmark.svg';

const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center font-bold mb-3">Success!</h1>
      <div className="w-24 mx-auto mb-8 text-green-600">
        <Checkmark />
      </div>
      <p className="mb-7 text-center">You should recieve a confimation email soon!</p>
      <Button onClick={() => navigate('/')}>Restart</Button>
    </>
  );
};

export default Success;
