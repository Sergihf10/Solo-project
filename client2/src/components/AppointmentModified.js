import React from 'react';
import { useNavigate } from 'react-router-dom';

function AppointmentModified() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/profile');
  };
  return (
    <div>
      <h1>Appointment successfully modified</h1>
      <button onClick={clickHandler}>Go back to my profile</button>
    </div>
  );
}

export default AppointmentModified;
