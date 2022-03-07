import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>
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
			<div class="wrapper">
  <div class="icon facebook">
    <div class="tooltip">Facebook</div>
    <span><i class="fab fa-facebook-f"></i></span>
  </div>
  <div class="icon twitter">
    <div class="tooltip">Twitter</div>
    <span><i class="fab fa-twitter"></i></span>
  </div>
  <div class="icon instagram">
    <div class="tooltip">Instagram</div>
    <span><i class="fab fa-instagram"></i></span>
  </div>
  <div class="icon youtube">
    <div class="tooltip">Youtube</div>
    <span><i class="fab fa-youtube"></i></span>
  </div>
</div>
    </div>

  );
}

export default Home;
