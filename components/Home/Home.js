import React from 'react'
import './home.scss'
import Info from './Info'
import Skills from './Skills'

function Home() { 
    return ( 
        <div className="home"> 
            <div style={{height: '30px'}}></div>
            <Info /> 
            <div style={{height: '30px'}}></div>
            <Skills /> 
            <div style={{height: '30px'}}></div>
        </div> 
    ) 
} 

export default Home;
