import React, { useState } from 'react' 
import './info.scss' 
import { Button, Collapse } from "@chakra-ui/core"; 

function Info() { 
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return ( 
        <div className="container myInfo"> 
            <div className="info"> 
                <div className="d-flex mb-3"> 
                    <img src="/static/images/human.jpg" alt="logo"/> 
                    <h1>About Me</h1> 
                </div> 
                <> 
                    <Collapse 
                        startingHeight={100} 
                        className="p"
                        isOpen={show}> 
                        I’m Md. Rijyan Hossain a Software Engineer, completed under graduation with a bachelor’s degree in Computer Science & Engineering (CSE) from {` `}
                        <a 
                            href="https://green.edu.bd" 
                            rel="noreferrer noopener"
                            target="_blank"> 
                            Green University. 
                        </a> 
                        {` `} During my four years of graduation, I have learnt computer programming with various of languages such as Assembly, C, Java, JavaScript, Ruby. <br/> <br/> 

                        I have solved over 400 hundred problems in online judges such as {` `} 
                        <a 
                            href="https://www.urionlinejudge.com.br/judge/en/users/statistics/107459" 
                            rel="noreferrer noopener" 
                            target="_blank">
                            URI
                        </a>, 
                        UVA, Light OJ, Hacker Rank. I had also participated in many programming contest and came up with a respective position except 2 or 3. <br/> 
                        <br/> 

                        Now I am a javascript full stack developer, build feasible web solution. I prefere to use React + Redux + NextJS as front-end technology. And NodeJS + Express as back-end technology. I build RESTful services with the help of express.  
                    </Collapse> 
                    <button 
                        style={{marginTop: '10px'}}
                        className="btn btn-primary" 
                        onClick={handleToggle}> 
                        Show {show ? "Less" : "More"} 
                    </button> 
                </> 
            </div> 
        </div> 
    ) 
} 

export default Info; 
