import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";



<compoe></compoe>

function App() {
  return (
  <>
   <Particles
   className ="particles-canvas"
   params={{
     particles:{
       number:{
         value: 30,
         density:{
           enable:true,
           value_area: 900
         }
       },
       shape:{
         type:"tesseract",
         stroke:{
           width: 6,
           color:"yellow"
         }
       }
     }
   }}
   />
   <Navbar/>
   <Header/>
   <AboutMe/>
   <Projects/>
   <Timeline/>
   <ContactMe/>
   <Footer/>
  </>
  );
}

export default App;
