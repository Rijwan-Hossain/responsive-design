import React from 'react' 
import './info.scss' 

function Info() { 
    return ( 
        <div className="container myInfo"> 
            <div className="info"> 
                <div className="d-flex mb-3"> 
                    <img src="/static/images/human.jpg" alt="logo"/> 
                    <h1>About Me</h1> 
                </div> 
                <p> 
                    I’m Md. Rijyan Hossain, completed under graduation with a bachelor’s degree in Computer Science & Engineering (CSE) from {` `}
                    <a href="https://green.edu.bd" target="_blank"> 
                        Green University. 
                    </a> 
                    {` `} During my four years of graduation, I have learnt computer programming with various of languages such as Assembly, C, Java, JavaScript, Ruby. 
                </p> 

                <div style={{height: '10px'}}></div> 

                <p>
                    I have solved over 400 hundred problems in online judges such as {` `} 
                    <a href="https://www.urionlinejudge.com.br/judge/en/users/statistics/107459" target="_blank">
                        URI
                    </a>, 
                    UVA, Light OJ, Hacker Rank. I had also participated in many programming contest and came up with a respective position except 4 or 5. 
                </p> 

                <div style={{height: '10px'}}></div> 

                <p>
                    Now I am a javascript full stack developer, build feasible web solution. I prefere to use React + Redux + NextJS as front-end technology. And NodeJS + Express as back-end technology. I build RESTful services with the help of express.  
                </p>
            </div> 
        </div> 
    ) 
} 

export default Info
