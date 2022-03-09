import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to TheBarberShop</h1>
      <h2>
        Already a member?
        <button className="buttons">
          <Link to="/login"> Login </Link>
        </button>
      </h2>
      <h2>
        Do you want to join the club?
        <button className="buttons">
          <Link to="/register">Register here</Link>
        </button>
      </h2>
      <div className="wrapper">
        <div className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
        <div className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
        <div className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="icon youtube">
          <div className="tooltip">Youtube</div>
          <span>
            <i className="fab fa-youtube"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
