import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AppointmentCreated.css'

function AppointmentCreated() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/profile');
  };
  setTimeout(clickHandler, 3000);

  return (
    <div className='appointmentcreated'>
      <h1>Appointment successfully created</h1>
    </div>
  );
}

export default AppointmentCreated;
