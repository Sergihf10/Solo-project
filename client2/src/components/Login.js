import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

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
    <section>
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email here"
          name="email"
          value={emailLogin}
          onChange={handleEmail}
        ></input>
        <input
          type="password"
          placeholder="Enter your password here"
          name="password"
          value={passwordLogin}
          onChange={handlePassword}
        ></input>
        <button className="buttons" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
