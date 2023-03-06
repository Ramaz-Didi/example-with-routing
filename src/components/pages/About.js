import React from "react";
import styles from "./styles/about.css"
import Placeholder from 'react-bootstrap/Placeholder';
import aboutImg from '../assets/website-design-2.jpg';

function About() {
  return (
    <div>
     
        <div className="aboutTitle">
          <h3>ABOUT ME</h3>
        </div>
        <div className="aboutSpace">
          <div className="aboutImg">
            <img className="aboutImg" variant="top" src={aboutImg} />
          </div>
        </div>
        <div className="aboutSpaceText">
          <div className="aboutText">
              I'm achieving my dream to became Web designer, last few month I sacrificed my life to be able to produce quality web app. Every new project brings additional joy and experience. 
          </div>
        </div>   

      

      
    </div>
  );
}

export default About;
