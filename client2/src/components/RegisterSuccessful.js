import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterSuccessful() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/login');
  };
  return (
    <div>
      <h1>You have successfully registered</h1>
      <button onClick={clickHandler}>Go to my login page</button>
    </div>
  );
}

export default RegisterSuccessful;
