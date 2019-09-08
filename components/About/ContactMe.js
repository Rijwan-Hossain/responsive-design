import React from 'react'

function ContactMe() {
    return (
        <div className="container">
            <div className="contact">
                <div className="d-flex mb-3"> 
                    <img src="/static/images/contact.png" alt="logo"/> 
                    <h1>Contact Me</h1> 
                </div> 
                <div className="contacts">
                    <div className="one">
                        <div className="d-flex">
                            <img src="/static/images/contact.png" alt="asdf" />
                            <h4 className="media mb-3">Email</h4> 
                        </div>
                        <p>rijyan.cse.152@gmail.com</p>
                        <p>rijyan15207@gmail.com</p>
                    </div>
                    <div className="two">
                        <div className="d-flex">
                            <img className="olimg" src="/static/links/ol.jpg" alt="asdf" />
                            <h4 className="media mb-3">Other Links</h4>
                        </div>
                         
                        <a href="https://www.facebook.com/rijwan000" target="_blank">
                            <img src="/static/links/fb.png"  alt="facebook link"/> 
                        </a> 
                        <a href="https://www.linkedin.com/in/md-rijyan-hossain-42a9ab188/" target="_blank">
                        <img src="/static/links/linkedin.png"  alt="linkedin link"/> 
                        </a>
                    </div>
                    <div className="three"> 
                        <div className="d-flex"> 
                            <img className="olimg" src="/static/links/call.png" alt="asdf" /> 
                            <h4 className="media mb-3">Phone No</h4> 
                        </div> 
                        <p>+880 1758712370</p> 
                    </div>
                    <div className="four"> 
                        <div className="d-flex"> 
                            <img className="olimg" src="/static/links/home.png" alt="asdf" /> 
                            <h4 className="media mb-3">Address</h4> 
                        </div> 
                        <p>Mirpur-2, H-Block, Road-10, House-2, Dhaka-1216, Bangladesh</p>
                    </div> 
                </div> 
            </div> 
        </div> 
    ) 
} 

export default ContactMe; 
