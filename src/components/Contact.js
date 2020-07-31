import React from "react";
// import {Button} from 'reactstrap';

function Nav() {
  return (   
    <div className="contact-container">
      <h2 id="contact">get in touch.</h2>
      <button 
        type="button" 
        className="btn-lg"
        onClick={(event) => (window.location.href = "contact")}
        >
        CONTACT 
      </button>
    </div>
  );
}
  
export default Nav