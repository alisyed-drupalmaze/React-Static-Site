import React from 'react';
import ContactForm from './Form/ContactForm'
import "./ContactusPage.syle.css"

function ContactusPage () {

    return (

      <div className="row">
     <div className="col s12 center">
      </div>
      <div className="col s6 center"><span className="FaTools center"><ContactForm /></span></div>
      <div className="col s6 ">
      <h1 className="center">Contact Us</h1>
      <p className="center">Need assistance with your WebSite? <br>
      </br>We’ll get you the help you need.</p>
      </div>
    </div>



    )
  
}

export default ContactusPage;

