import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Education from './Education'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Particles
            params={{
             particles: {
                number: {
                value: 70,
                density: {
                enable:true,
                 value_area:1000
              }
             }
            }
            }} 
         />
         <Header/>
         <About/>
         <Education/>
         <Skills/>
         <Contact/>
         
    </div>
  );
}

export default App;
