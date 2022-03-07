import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import User from './components/User';
import AppointmentsCalendar from './components/AppointmentsCalendar';
import { useState, useMemo } from 'react';
import AppointmentCreated from './components/AppointmentCreated';
import RegisterSuccessful from './components/RegisterSuccessful';
import { UserContext } from './components/UserContext';
import ModifyAppointment from './components/ModifyAppointment';
import AppointmentModified from './components/AppointmentModified';
import AppointmentDeleted from './components/AppointmentDeleted';
import DeleteAppointment from './components/DeleteAppointment';

function App() {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>

            <Route path="profile" element={<User />}></Route>
            <Route
              path="newappointment"
              element={
                <AppointmentsCalendar
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              }
            />
            <Route
              path="myappointments"
              element={<ModifyAppointment />}
            ></Route>
            <Route
              path="deleteappointment"
              element={<DeleteAppointment></DeleteAppointment>}
            ></Route>
            <Route
              path="appointmentcreated"
              element={<AppointmentCreated />}
            ></Route>
            <Route
              path="appointmentmodified"
              element={<AppointmentModified />}
            ></Route>
            <Route
              path="appointmentdeleted"
              element={<AppointmentDeleted></AppointmentDeleted>}
            ></Route>
            <Route
              path="registersuccessful"
              element={<RegisterSuccessful />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
