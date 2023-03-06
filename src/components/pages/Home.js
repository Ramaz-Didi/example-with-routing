import React from "react";
import styles from "./styles/home.css"
import homeImg from '../assets/Ramaz-choxashi.jpg';

function Home() {
  return (
    <div>
      <div className="homeSpace">
      <div>
        <h3>Hello, this is</h3>
      </div>
      <div>
        <h1>Ramaz Kartozia</h1>
      </div>
      <div className="homeSpaceImg">
        <img className="homePageImg" src={homeImg}/>
      </div>
      <div className="homeSpaceFooting">
        <div className="homeSpaceFootingText">
          <p>I'm finance professional. Today's world requires good understanding of the digital environments. I love to design and make new web experience for the people. I'm happy to share my knowledge to others</p>
        </div>
      </div>

    </div>
    
    </div>
  );
}

export default Home;
