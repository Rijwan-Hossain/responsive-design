import React from 'react'
import './achievement.scss'

function Achievement() { 
    return ( 
        <div className="container"> 
            <div className="award"> 
                <div className="d-flex mb-3"> 
                    <img src="/static/images/award.png" alt="logo"/>  
                    <h1>Achievements</h1> 
                </div> 
                <h4 className="title mb-3">Academic</h4> 
                <p className="dean"> 
                    <strong>DEAN CERTIFICATE </strong> - Based on academic performance - Spring Semester 2016 - Green University 
                </p> 
                
                <h4 className="title mt-4 mb-3">Programming Contest</h4> 
                <p className="programming">
                    <strong>
                    RANKED 1ST</strong> - GUB IPC-1 & IPC-2</p> 
                <p className="programming">
                    <strong>
                    RANKED 2ND</strong> - GUB IPC-3, IPC-6 & CSE Carnival-2016</p> 
                <p className="programming">
                    <strong>
                    RANKED 3RD</strong> - GUB CSE Carnival-2017, 2018 & 2019</p> 
            </div> 
        </div> 
    ) 
} 

export default Achievement; 
