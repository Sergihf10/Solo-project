import React from 'react';
import { useNavigate } from 'react-router-dom';

function AppointmentCreated() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/profile');
  };
  return (
    <div>
      <h1>Appointment successfully created</h1>
      <button onClick={clickHandler}>Go back to my profile</button>
    </div>
  );
}

export default AppointmentCreated;
