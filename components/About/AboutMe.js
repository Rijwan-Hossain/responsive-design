import React from 'react' 
import './about.scss' 
import Info from './Info'
import Achievement from './Achievement'
import Education from './Education'
import ContactMe from './ContactMe'
import './contact.scss' 


function AboutMe() { 
    return ( 
        <div className="about"> 
            <div style={{height: '30px'}}></div> 
            <Info /> 
            <div style={{height: '30px'}}></div> 
            <Achievement /> 
            <div style={{height: '30px'}}></div> 
            <Education /> 
            <div style={{height: '30px'}}></div> 
            <ContactMe /> 
            <div style={{height: '30px'}}></div> 
        </div> 
    ) 
} 

export default AboutMe; 
