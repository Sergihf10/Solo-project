import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import '../styles/Calendar.css';

function AppointmentsCalendar({ setAppointments }) {
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [appointmentEmail, setAppointmentEmail] = useState('');

  const emailHandler = (e) => {
    setAppointmentEmail(e.target.value);
  };

  let handleColor = (time) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  let randomDate = new Date();

  const submitAppointmentHandler = async (e) => {
    e.preventDefault();

    const appointment = {
      date: startDate,
      email: appointmentEmail,
    };

    const appointmentFromDb = await fetch(
      'http://localhost:4000/newappointment',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(appointment),
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
    setAppointments((previousAppointments) => [
      ...previousAppointments,
      appointmentFromDb,
    ]);
    setAppointmentEmail('');
    navigate('/appointmentcreated');
  };

  return (
    <div className="appointment">
      <h1>Choose the time for your appointment</h1>
      <div className="appointmentform">
        <form onSubmit={submitAppointmentHandler}>
          <div className="datePicker">
            <DatePicker
              placeholderText="Click to select date"
              showTimeSelect
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              filterDate={(date) => date.getDay() !== 7 && date.getDay()}
              minTime={randomDate.setHours(9)}
              maxTime={randomDate.setHours(16, 30)}
              timeClassName={handleColor}
            />
          </div>

          <input type="text" name="time" value={startDate}></input>
          <input
            type="text"
            name="appointmentemail"
            value={appointmentEmail}
            onChange={emailHandler}
						placeholder="Enter your email"
          ></input>
          <button className='appointmentbutton'> Create new appointment</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentsCalendar;
