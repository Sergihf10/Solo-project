import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import apiService from '../ApiService';
import Moment from 'moment';
import '../styles/ModifyCalendar.css';

function ModifyAppointment() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [startDate, setStartDate] = useState('');
  const [appointmentInfo, setAppointmentInfo] = useState({});

  useEffect(() => {
    apiService
      .getAppointmentInfo(user.email)
      .then((result) => setAppointmentInfo(result[0]));
  }, [user.email]);

  console.log(appointmentInfo);

  let handleColor = (time) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  let randomDate = new Date();

  const modifyAppointmentHandler = async (e) => {
    e.preventDefault();

    console.log(appointmentInfo);
    const appointment = {
      date: startDate,
      email: user.email,
      id: appointmentInfo._id,
    };
    const modifyAppointmentFromDb = await fetch(
      `http://localhost:4000/appointments/${appointmentInfo.email}`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(appointment),
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
    navigate('/appointmentmodified');
  };

  return (
    <div className="modifyappointment">
      <h1>Modify the time of your appointment</h1>
      <h2>
        Your current appointment :
        {Moment(`${appointmentInfo.date}`).format('MMMM Do YYYY, h:mm:ss a')}
      </h2>
      <div className="modifyappointmentform">
        <form onSubmit={modifyAppointmentHandler}>
          <DatePicker
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            filterDate={(date) => date.getDay() !== 7 && date.getDay()}
            minTime={randomDate.setHours(9)}
            maxTime={randomDate.setHours(16, 30)}
            timeClassName={handleColor}
						placeholderText="Click to modify date"
          />
          <input type="text" name="time" value={startDate}></input>
          <button className="modifyappointmentbutton">
            Modify appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModifyAppointment;
