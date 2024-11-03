import React from 'react'
import './navbar.css'
import icon from '../../images/icon.png'

function Navbar() {
  return (
    <div>
      <section>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid nav-section">
    <img className='icon' src={icon} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-burger"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Certifications</a>
        </li>
        
        
      </ul>
      <button className='btn btn-dark contact'>Contact Me</button>
    </div>
  </div>
</nav>
      </section>
    </div>
  )
}

export default Navbar
