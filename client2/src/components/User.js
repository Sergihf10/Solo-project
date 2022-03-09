import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import apiService from '../ApiService';
import '../styles/User.css';

function User() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    apiService.getUserInfo(user.email).then((result) => setUserInfo(result[0]));
  }, [user.email]);

  const handleNewAppointment = async (e) => {
    e.preventDefault();
    navigate('/newappointment');
  };

  const modifyAppointment = async (e) => {
    e.preventDefault();
    navigate('/myappointments');
  };

  const deleteAppointment = async (e) => {
    e.preventDefault();
    navigate('/deleteappointment');
  };

  return (
    <div className='userbackground'>
      <h1>Welcome Mr. {userInfo.name}!</h1>
      <div className="userbuttons">
        <button className="appointmentButton" onClick={handleNewAppointment}>
          Make a new appointment
        </button>

        <button className="changeButton" onClick={modifyAppointment}>
          Change my appointment
        </button>
        <button className="cancelButton" onClick={deleteAppointment}>
          Cancel my appointment
        </button>
      </div>
    </div>
  );
}

export default User;
