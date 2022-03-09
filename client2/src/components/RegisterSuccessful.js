import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registered.css';

function RegisterSuccessful() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/login');
  };

  setTimeout(clickHandler, 3000);
  return (
    <div className="registered">
      <h1 className="registeredtitle">You have successfully registered</h1>
    </div>
  );
}

export default RegisterSuccessful;
