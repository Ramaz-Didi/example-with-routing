import React from "react";
import projects from './projects-data'
// import Carousel from 'react-bootstrap/Carousel';
import styles from "./styles/projects.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projets() {
  return (
    <div className="allSpace">
        <h3>Some of my recent works </h3>
       
        
        <div className="container"> 
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img className="cardImg" variant="top" src={projects[0].img}/>
          <Card.Body>
            <Card.Title className="cardText">{projects[0].name}</Card.Title>
            <Card.Text className="cardText2">
              {projects[0].desc}
            </Card.Text>
            <Button variant="primary" href={projects[0].href}>Github link to deployed version</Button>
            <a href={projects[0].github}>link to GitHub repository</a>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img className="cardImg" variant="top" src={projects[1].img}/>
          <Card.Body>
            <Card.Title className="cardText">{projects[1].name}</Card.Title>
            <Card.Text className="cardText2">
              {projects[1].desc}
            </Card.Text>
            <Button variant="primary" href={projects[1].href}>Github link to deployed version</Button>
            <a href={projects[1].github}>link to GitHub repository</a>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img className="cardImg" variant="top" src={projects[2].img}/>
          <Card.Body>
            <Card.Title className="cardText">{projects[2].name}</Card.Title>
            <Card.Text className="cardText2">
              {projects[2].desc}
            </Card.Text>
            <Button variant="primary" href={projects[2].href}>Github link to deployed version</Button>
            <a href={projects[2].github}>link to GitHub repository</a>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Img className="cardImg" variant="top" src={projects[3].img}/>
          <Card.Body>
            <Card.Title className="cardText">{projects[3].name}</Card.Title>
            <Card.Text className="cardText2">
              {projects[3].desc}
            </Card.Text>
            <Button variant="primary" href={projects[3].href}>Github link to deployed version</Button>
            <a href={projects[3].github}>link to GitHub repository</a>
          </Card.Body>
        </Card>
        </div>
    </div> 
  );
}

export default Projets;
