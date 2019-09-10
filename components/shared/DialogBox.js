import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function DialogBox() {
  return (
    <UncontrolledAlert color="info" className="pb-0 mb-0">
        <p style={{
          fontSize: '13px'
        }}> 
          This static project is made by<b> ReactJS & NextJS</b> for SSR. For better view, please use Google Chrome or Brave browser.
        </p> 
        <p style={{ 
          fontSize: '13px' 
        }}> 
          Source Code: https://github.com/Rijwan-Hossain/responsive-design
        </p> 
    </UncontrolledAlert> 
  ); 
} 

export default DialogBox; 
