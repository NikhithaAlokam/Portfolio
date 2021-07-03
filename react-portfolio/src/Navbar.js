import React from 'react';
import avatar from './avatar.jpg';
import {Link,animateScroll as scroll} from "react-scroll"

function Navbar() {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white text-center">
     <div className="profile ">
        <img src={avatar} alt="none" width="100px"></img>
      </div>
    <div className="container">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
{/*  */}
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to="Header" smooth={true} duration={900}>Home </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="About" smooth={true} duration={900}>About</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Education" smooth={true} duration={900}>Education</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="skills" smooth={true} duration={900}>Skills</Link></a>
      </li><li className="nav-item">
        <a className="nav-link" href="#"><Link to="Contact" smooth={true} duration={900}>Contact</Link></a>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
</div>
  );
}

export default Navbar;
