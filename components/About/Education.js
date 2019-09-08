import React from 'react'
import './edu.scss'

function Education() {
    return (
        <div className="container">
            <div className="edu">
                <div className="d-flex mb-3"> 
                    <img src="/static/images/edu.png" alt="logo"/> 
                    <h1>Education</h1> 
                </div> 
                <p className="programming">
                    <strong>
                    BACHELOR DEGREE IN CSE</strong> - Green University, 2015 - 2019</p> 
                <p className="programming"> 
                    <strong> 
                    HIGHER SECONDARY CERTIFICATE</strong> - Government Bangla College</p> 
                <p className="programming"> 
                    <strong>
                    SECONDARY SCHOOL CERTIFICATE</strong> - Progati High School</p> 
            </div>
        </div>
    )
}

export default Education;
