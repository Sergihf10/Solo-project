import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import apiService from '../ApiService';
import Moment from 'moment';

function DeleteAppointment() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [appointmentInfo, setAppointmentInfo] = useState({});
  useEffect(() => {
    apiService
      .getAppointmentInfo(user.email)
      .then((result) => setAppointmentInfo(result[0]));
  }, [user.email]);

  const deleteAppointmentHandler = async (e) => {
    e.preventDefault();
    console.log(appointmentInfo._id);
    const appointmentDelete = {
      email: user.email,
      id: appointmentInfo._id,
    };

    const deleteAppointmentFromDb = await fetch(
      `http://localhost:4000/appointments/${appointmentInfo.email}`,
      {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(appointmentDelete),
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
    navigate('/appointmentdeleted');
  };

  return (
    <div>
      <h2>Delete your appointment</h2>
      <div>
        <h3>
          Your current appointment:
          {Moment(`${appointmentInfo.date}`).format('MMMM Do YYYY, h:mm:ss a')}
        </h3>
        <button onClick={deleteAppointmentHandler}>
          Delete my appointment
        </button>
      </div>
    </div>
  );
}

export default DeleteAppointment;
