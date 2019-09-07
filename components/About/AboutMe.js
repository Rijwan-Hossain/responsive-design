import React from 'react' 
import './about.scss' 
import Info from './Info'

function AboutMe() { 
    return ( 
        <div className="about"> 
            <div style={{height: '30px'}}></div>
            <Info /> 
            <div style={{height: '30px'}}></div>
        </div> 
    ) 
} 

export default AboutMe; 
