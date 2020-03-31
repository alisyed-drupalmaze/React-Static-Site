import React from 'react'
import './PageFooter.style.css'
import {FaReact, FaHeart, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function PageFooter () {


    return (
        <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="black-text"><FaReact /> React App</h5>
                <p className="black-text text-lighten-4">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="black-text">Socail Links</h5>
                <ul className="socail-icon">
                  <li><a className="black-text text-lighten-3" href="#"><FaFacebook /></a></li>
                  <li><a className="black-text text-lighten-3" href="#"><FaTwitter  /></a></li>
                  <li><a className="black-text text-lighten-3" href="#"><FaLinkedin  /></a></li>
                  <li><a className="black-text text-lighten-3" href="#"><FaInstagram  /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container black-text">
            © 2020 Copyright Information
            <a className="black-text text-lighten-4 right" href="https://www.drupalmaze.com/">Made with️ <FaHeart /> in CT</a>
            </div>
          </div>
        </footer>
    </div>
    )
    

}


export default PageFooter;