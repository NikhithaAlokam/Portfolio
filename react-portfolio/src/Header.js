import React,{useRef,useEffect} from 'react';
import Typed from "react-typed";
import arrow from './Arrow.jpg';
import {Link,animateScroll as scroll} from "react-scroll"

function Header() {
  return (
    <div className="Header">
      <div className="header-wrapper">
        <div className="main-info ">
          <h1>Hi..! This is Nikhitha</h1>
          <Typed
          className="typed-text"
          strings={["Student from VIT","Front-end Webdeveloper","Working on Backend"]}
          typeSpeed={40}
          backSpeed={60}
          />
          
           
      </div>

        
       
          <div> <a className="Arrow_Button "><Link to="Nav" smooth={true} duration={600}><img src={arrow}/></Link></a></div>
       
      </div>
      </div>
  );
}

export default Header;