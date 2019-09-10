import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

function DialogBox() {
  return (
    <UncontrolledAlert color="info" className="px-5 pb-0 mb-0">
        <p className="px-5"> 
          This static project is made by ReactJS & NextJS for SSR.
        </p> 
        <p className="px-5">
            For better view, please use Google Chrome or Brave browser.
        </p> 
    </UncontrolledAlert>
  );
}

export default DialogBox;
