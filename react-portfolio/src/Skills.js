import React from 'react';
import js from './js.svg';
import html from './html.svg';
import css from './css.svg';
import react from './react.svg';
import bootstrap from './bootstrap.svg';
import python from './python.svg';
import sql from './sql.svg';


function Skills(){
    return(
        <div className="skills text-center" id="skills">
        <p className="skill_head h1 text-primary">Skills</p>
        <div className="skill_items" >
        
                    
                <img src={html}  alt="html"/>
                <img src={css} alt="css"/>
                <img src={js} alt="js"/>
                <img src={bootstrap} alt="bootstrap"/>
                <img src={react} alt="react"/>
                <img src={python} alt="python"/>
                <img src={sql} alt="sql"/>
            
            </div>
                
    </div>
    )


}
export default Skills;