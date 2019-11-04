import React from 'react' 
import './project.scss' 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 

function Projects() { 
    return ( 
        <div className="container projectContainer"> 
            <div className="d-flex mb-3"> 
                <img src="/static/images/projects.png" alt="logo"/>
                <h1>Projects</h1> 
            </div> 
            
            <p> 
                I am a javascript full stack developer, build feasible web solution. I prefere to use React-Redux & NodeJS. I build RESTful services with the help of ExpressJS. 
            </p> 

            <div className="projects" style={{marginBottom: '30px'}}>  
                <div style={{overflow: 'hidden'}} className="project1">  
                    <p style={{
                        background: 'rgb(225 225 225)', 
                        height: '50px', 
                        lineHeight: '50px', 
                        textAlign: 'center', 
                        color: 'rgb(80 80 80)', 
                        borderBottom: '1px solid rgb(210 210 210)'
                    }}> 
                        MERN Stack App
                    </p> 
                    <h4 style={{
                        height: '100px', 
                        lineHeight: '100px', 
                        textAlign: 'center'
                    }}>
                        Meet Twitt 
                    </h4>
                    <a 
                        className="sc btn btn-primary" 
                        target="_blank"
                        href="https://github.com/Rijwan-Hossain/twitter-clone">
                        Source Code 
                    </a>
                    <a 
                        className="sc btn btn-success" 
                        target="_blank"
                        href="#">
                        Live: Coming Soon
                    </a>
                </div> 




                <div style={{overflow: 'hidden'}} className="project2">
                    <p style={{
                        background: 'rgb(225 225 225)', 
                        height: '50px', 
                        lineHeight: '50px', 
                        textAlign: 'center', 
                        color: 'rgb(80 80 80)', 
                        borderBottom: '1px solid rgb(210 210 210)'
                    }}> 
                        React-Redux App 
                    </p> 
                    <h4 style={{
                        height: '100px', 
                        lineHeight: '100px', 
                        textAlign: 'center'
                    }}>
                        Tree Center 
                    </h4>
                    <a 
                        className="sc btn btn-primary" 
                        target="_blank"
                        href="https://github.com/Rijwan-Hossain/Tree-Center/tree/master/tree">
                        Source Code 
                    </a>
                    <a 
                        className="sc btn btn-success" 
                        target="_blank"
                        href="https://eloquent-mirzakhani-5f5c99.netlify.com/">
                        Live Demo
                    </a>
                </div> 



                <div style={{overflow: 'hidden'}} className="project3">
                    <p style={{
                        background: 'rgb(225 225 225)', 
                        height: '50px', 
                        lineHeight: '50px', 
                        textAlign: 'center', 
                        color: 'rgb(80 80 80)', 
                        borderBottom: '1px solid rgb(210 210 210)'
                    }}> 
                        React App (Github API) 
                    </p> 
                    <h4 style={{
                        minHeight: '100px', 
                        lineHeight: '100px', 
                        textAlign: 'center'
                    }}>
                        Github Profile Finder
                    </h4>
                    <a 
                        className="sc btn btn-primary" 
                        target="_blank"
                        href="https://github.com/Rijwan-Hossain/Github-Profile-Finder">
                        Source Code 
                    </a>
                    <a 
                        className="sc btn btn-success" 
                        target="_blank"
                        href="https://cocky-dubinsky-b41c1f.netlify.com/">
                        Live Demo
                    </a> 
                </div> 
            </div> 
        </div> 
    ) 
} 

export default Projects; 
