import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="homeId" className="header-wrapper">
        <div className="main-info">
            <h1>Akhil Kondabathini</h1>
            <Typed
                className ="typed-text"
                strings = {["Software Engineer", "Comicbooks Fan",
                 "Sports Enthusiast", "Aptitude for Science"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
           
            <Link smooth ={true} to="contactId" offset={-80} duration={1000} className="btn-main-offer">Contact Me</Link>

        </div>
        </div>
    )
}

export default Header
