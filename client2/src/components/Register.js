import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  let navigate = useNavigate();
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const nameHandler = (e) => {
    setNameInput(e.target.value);
  };

  const surnameHandler = (e) => {
    setSurnameInput(e.target.value);
  };

  const emailHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = {
      name: nameInput,
      surname: surnameInput,
      email: emailInput,
      password: passwordInput,
    };

    const userFromDb = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
    setNameInput('');
    setSurnameInput('');
    setEmailInput('');
    setPasswordInput('');
    navigate('/registersuccessful');
  };

  return (
    <div className="register">
      <div className="container">
        <header>
          <h1>Join the BarberShop</h1>
        </header>
        <h1 className="text-center">Register</h1>
        <form className="registration-form" onSubmit={submitHandler}>
          <div className="firstRow">
            <label className="col-one-half">
              <span className="label-text">First Name</span>
              <input
                type="text"
                name="firstName"
                onChange={nameHandler}
                value={nameInput}
                placeholder="Enter your name"
              />
            </label>
            <label className="col-one-half">
              <span className="label-text">Last Name</span>
              <input
                type="text"
                name="lastName"
                onChange={surnameHandler}
                value={surnameInput}
                placeholder="Enter your last name"
              />
            </label>
          </div>
          <label>
            <span className="label-text">Email</span>
            <input
              type="text"
              name="email"
              onChange={emailHandler}
              value={emailInput}
              placeholder="Enter your email"
            />
          </label>
          <label className="password">
            <span className="label-text">Password</span>
            <button
              className="toggle-visibility"
              title="toggle password visibility"
              tabIndex="-1"
            >
              <span className="glyphicon glyphicon-eye-close"></span>
            </button>
            <input
              type="password"
              name="password"
              onChange={passwordHandler}
              value={passwordInput}
              placeholder="Set up your password"
            />
          </label>
          <div className="text-center">
            <button className="submit">Sign Me Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
