import React from 'react'
import './info.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Typed from 'react-typed';

function Info() {
    return (
        <div className="container"> 
            <h1 className="hello">Hello.</h1> 
            <p className="name">This is Md. Rijyan Hossain</p>
            <p className="typed">& I am a</p> 
            <Typed 
                loop 
                typeSpeed={70} 
                backSpeed={60} 
                strings={["Computer Programmer", "JavaScript Developer", "MERN Stack Developer", "Team Player", "Competitive Problem Solver"]} 
                backDelay={650}  
                className="self-typed" 
            /> 

            <img src="/static/images/me.jpg" alt="Rijwan Hossain" /> 
            <Button 
                download="CV.pdf" 
                className="cv" 
                color="primary" 
                href="/static/CV.pdf" 
            > 
                Download CV 
            </Button> 
        </div> 
    ) 
} 

export default Info
