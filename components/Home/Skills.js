import React from 'react'
import './skills.scss'

function Skills() { 
    return ( 
        <div className="container skillContainer"> 
            <h1>My skills</h1>
            <ul id="skillul"> 
                <li>Web Technology</li> 
                <li>Competitive Problem Solving</li> 
                <li>Web Development</li> 
                <li>Responsive Design</li> 
            </ul> 

            <div className="pro"> 
                <h3>PROFESSIONAL SKILLS</h3>
                <ul> 
                    <li>HTML5 & CSS3</li> 
                    <li>React & Redux</li> 
                    <li>CSS Grid & Flexbox</li> 
                    <li>NodeJS & ExpressJS</li> 
                    <li>Vanilla JavaScript</li> 
                    <li>MongoDB (NoSQL)</li> 
                    <li>ES6 & ES7</li>  
                    <li>RESTful API</li> 
                </ul> 
            </div> 
        </div> 
    ) 
} 

export default Skills;
