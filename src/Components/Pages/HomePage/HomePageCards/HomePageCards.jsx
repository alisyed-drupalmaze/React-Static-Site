import React from 'react';
import { MdDirectionsRun , MdGroupWork, MdSettings } from "react-icons/md";

function CardsHomePage () {

    return (
        <div className="section light-grey">

      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center "><MdDirectionsRun /></h2>
            <h5 className="center">Speeds up development</h5>

            <p className="center light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center "><MdGroupWork /></h2>
            <h5 className="center">User Experience Focused</h5>

            <p className="center light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center "><MdSettings /></h2>
            <h5 className="center">Easy to work with</h5>

            <p className="center light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>

    </div>
    )
}

export default CardsHomePage;