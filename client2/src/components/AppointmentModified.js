import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AppointmentModified.css';

function AppointmentModified() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/profile');
  };

  setTimeout(clickHandler, 3000);
  return (
    <div className="appointmentmodified">
      <h1>Appointment successfully modified</h1>
    </div>
  );
}

export default AppointmentModified;
