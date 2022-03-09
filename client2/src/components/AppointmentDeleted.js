import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AppointmentDeleted.css';

function AppointmentDeleted() {
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate('/profile');
  };

  setTimeout(clickHandler, 3000);
  return (
    <div className="appointmentdeleted">
      <h1>Appointment successfully deleted</h1>
    </div>
  );
}

export default AppointmentDeleted;
