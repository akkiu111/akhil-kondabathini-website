import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faDesktop, faFileCode, faTerminal } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    return (
        <div id ="projectsId" className="projects">
        <h1 className="py-5">My Projects</h1>
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
        <a href="https://github.com/akkiu111/DataStructuresAlgorithmsImportant/"
target="_blank" rel="noreferrer" style={{color:"black"}}>
    <div className="box">
    <div className="circle">
    <FontAwesomeIcon className="icon" icon={faTable} size="2x"/>
        </div>
        <h3>Ds and Algo</h3>
        <p>Data Structures and Algorithms problems</p>
    </div>
    </a> 
    </div> 

        <div className="col-lg-3 col-md-6 col-sm-6">
        <a href="https://github.com/akkiu111/Akhil_Web_.NetApplications/"
target="_blank" rel="noreferrer" style={{color:"black"}}>
    <div className="box">
    <div className="circle">
          <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
     </div>  
        <h3>Web Development</h3>
        <p>Web deisgn and development projects</p>
    </div>
    </a>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
        <a href="https://github.com/akkiu111/Akhil_WebServices_.NetApplications/"
target="_blank" rel="noreferrer" style={{color:"black"}}>
    <div className="box">
    <div className="circle">
    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
        </div>
        <h3>Web Services</h3>
        <p>REST, SOAP, Web Services projects</p>
    </div>
    </a>
        </div> 

        <div className="col-lg-3 col-md-6 col-sm-6">
        <a href="https://github.com/akkiu111/Akhil_Console_.NetApplications/"
target="_blank" rel="noreferrer"  style={{color:"black"}}>
    <div className="box">
    <div className="circle">
    <FontAwesomeIcon className="icon" icon={faTerminal} size="2x"/>
        </div>
        <h3>Console</h3>
        <p>Console Application projects</p>
    </div>
    </a>
        </div> 

        </div>
        </div>
        </div>  

    )
}

export default Projects
   