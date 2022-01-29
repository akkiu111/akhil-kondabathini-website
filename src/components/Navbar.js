import React from "react";
import mylogo from "../mylogo.jpg";
import {Link} from "react-scroll";

// REACT FONTAWSOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
          <Link smooth={true} to="homeId" className="navbar-brand" href="#"><img src={mylogo} alt="Akhil's logo...."/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link smooth={true} to="homeId" className="nav-link" href="#homeId">home<span className="sr-only">(current)</span></Link>
                  </li>

      <li className="nav-item">
        <Link smooth={true} to="aboutId" offset={-80} duration={1000} className="nav-link" href="#aboutId">about me</Link>
      </li> 

      <li className="nav-item">
        <Link smooth={true} to="projectsId" offset={-80} duration={1000} className="nav-link" href="#projectsId">projects</Link>
      </li> 

      <li className="nav-item">
        <Link smooth={true} to="timelineId" offset={-80} duration={1000} className="nav-link" href="#timelineId">timeline</Link>
      </li>
   
      <li className="nav-item">
        <Link smooth={true} to="contactId" offset={-80} duration={1000} className="nav-link" href="#contactId">contact</Link>
      </li>   

    </ul> 

  </div>

  </div>

</nav>
    )
}

export default Navbar
