import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../styles/Login.css';
import logo from '../images/logo.png';

function Login() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleEmail = (e) => {
    setEmailLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordLogin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logedInUser = {
      email: emailLogin,
      password: passwordLogin,
    };
    setUser(logedInUser);
    setEmailLogin('');
    setPasswordLogin('');
    navigate('/profile');
  };

  return (
    <div>
      <section>
        <form className="login" onSubmit={handleSubmit}>
          <div className="brand-title">TheBarberShop</div>
          <div className="imgcontainer">
            <img src={logo} alt="logo" className="logo"></img>
          </div>
          <div className="container2">
            <input
              type="text"
              placeholder="Enter your email here"
              name="logintext"
              value={emailLogin}
              onChange={handleEmail}
              required
            ></input>
            <input
              type="password"
              placeholder="Enter your password here"
              name="loginpassword"
              value={passwordLogin}
              onChange={handlePassword}
              required
            ></input>
            <button className="loginbutton" type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
