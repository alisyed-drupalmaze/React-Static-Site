import React from 'react';

import './NavBar.style.css'

function NavBar () {

    return (
        <nav>
        <div className="nav-wrapper" style = {{ background: "#fff"}}>
          <a href="#" className="brand-logo right">React Boilerplate</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/Home">Home</a></li>
            <li><a href="/AboutPage">About Us</a></li>
            <li><a href="/ContactusPage">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    )

     

    
}

export default NavBar;