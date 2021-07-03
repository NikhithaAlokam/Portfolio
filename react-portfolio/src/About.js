import React from 'react';
import avatar from './avatar.jpg'
function About(){
    return(
    <div className="About">
    <div className="pl-5 h1 pb-3 pt-5 mb-1 text-center w-100"><span className=" text-primary">About </span><span className=" text-secondary">Me!</span></div>
    <div className="About-block">
        <div className="About-image">
        <img src={avatar}  height="550px"></img>
        </div>
        <div className="About-text">
        <div className="pl-3 pb-1 h2 pt-1 mb-1 text-center w-100"><span className="Name text-light" >Iam </span><span className=" text-success" >Nikhitha</span></div>
        <div className="pl-3 pb-1 pt-1 mb-1 text-center w-100"><span className="Name text-primary">FullName: </span><span className=" text-light">ALOKAM NIKHITHA</span></div>
        <div className="pl-3 pb-1 pt-1 mb-1 text-center w-100"><span className="Name text-primary" >Age: </span><span className=" text-light" >19</span></div>
        <div className="pl-3 pb-1 pt-1 mb-1 text-center w-100"><span className="Name text-primary">Nationality:</span><span className=" text-light">Indian</span></div>
        <div className="pl-3 pb-1 pt-1 mb-1 text-center w-100"><span className="Name text-primary">Languages:</span><span className=" text-light" >English,Hindi,Telugu</span></div>
       
        <div className="pl-3 pb-1 pt-1 mb-1 text-center w-100"><span className="Name text-primary">State,Country:</span><span className=" text-light" >AP,India</span></div>
        
        </div>
    </div>
    </div>
    )
}
export default About;