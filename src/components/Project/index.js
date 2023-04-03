import React from "react";
import pawFectPic from "../../assets/images/PawFect Pets.png";
import PilotHubPic from "../../assets/images/FlightHub.png";
import sunsetPic from "../../assets/images/Sunset 1.jpeg";
import regexPic from "../../assets/images/regex2.png";
import eeKeepPic from "../../assets/images/eeKeep1.png";
import portPic1 from "../../assets/images/port1.png";
import passGenPic from "../../assets/images/passGen1.png";
import schedulerProPic from "../../assets/images/schedulerPro.png";
import playerUp from "../../assets/images/playerUp.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dashboard from "./../Dashboards"

function Project() {
  const projects = [
    {
      title: "PilotHub",
      description:
        "Airport info to the nearest pint of beer, PilotHub has your six!",
      github: "https://github.com/bnk5532/PilotHub",
      link: "https://jonbullin84.github.io/PilotHub/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      src: PilotHubPic,
    },
    {
      title: "PawFect Friends",
      description: "It was time our pets joined us on social media, too!",
      github: "https://github.com/bnk5532/Pawfect-Friends",
      link: "https://pawfect-friends-app.herokuapp.com/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      iconNode: <i className="fa-brands fa-node-js icons"></i>,
      iconNPM: <i className="fa-brands fa-npm icons"></i>,
      src: pawFectPic,
    },
    {
      title: "Player Up!",
      description: "Get your game on with locals in this new community!",
      github: "https://github.com/bnk5532/player-up",
      link: "https://playerup2022.herokuapp.com/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      iconNode: <i className="fa-brands fa-node-js icons"></i>,
      iconNPM: <i className="fa-brands fa-npm icons"></i>,
      iconMDB: <i className="fa-brands fa-mdb icons"></i>,
      iconReact: <i className="fa-brands fa-react icons"></i>,
      src: playerUp,
    },
    {
      title: "Weather AboveGround",
      description: "Check your local weather in this easy-to-use dashboard.",
      github: "https://github.com/bnk5532/weather-aboveGround-app",
      link: "https://bnk5532.github.io/weather-aboveGround-app/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      src: sunsetPic,
    },
    {
      title: "Get-The-Gist",
      description: "A handy guide to URL validation using REGEX.",
      link: "https://gist.github.com/bnk5532/569625d57471a0a33592185d77033e75",
      iconJs: <i className="fa-brands fa-github icons"></i>,
      src: regexPic,
    },
    {
      title: "Scheduler Pro",
      description:
        "A website application to better manage daily chaos like a pro.",
      github: "https://github.com/bnk5532/myScheduler-pro",
      link: "https://bnk5532.github.io/myScheduler-pro/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      src: schedulerProPic,
    },
    {
      title: "Employee Keeper Pro",
      description:
      "Track employees stats relating to dept, title, salary and manager.",
      github: "https://github.com/bnk5532/employee-keeper-pro",
      link: "https://watch.screencastify.com/v/BAeAlUdhEE5ilWnaY5TX",
      iconTerm: <i className="fa-solid fa-terminal icons"></i>,
      src: eeKeepPic,
    },
    {
      title: "Random Password App",
      description: "Generates random passwords using all characters types.",
      github: "https://github.com/bnk5532/rando-pass-gen",
      link: "https://bnk5532.github.io/rando-pass-gen/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      iconJs: <i className="fa-brands fa-square-js icons"></i>,
      src: passGenPic,
    },
    {
      title: "First Developer Portfolio",
      description: "Wow, just look how far we've come!",
      github: "https://github.com/bnk5532/player-up",
      link: "https://bnk5532.github.io/BNK-Port/",
      iconHTML: <i className="fa-brands fa-html5 icons"></i>,
      iconCSS: <i className="fa-brands fa-css3-alt icons"></i>,
      src: portPic1,
    },
  ];

  
  return (
    <Container fluid>
       {/* <div className="resume-title"> 
        <a href="#Projects">Projects</a> &nbsp;| &nbsp;
        <a href="#Dashboards">Dashboards</a>
      </div> */}
      <h1>Projects</h1>
      <Row>
        {projects.map((project) => {
          return (
            <Col className="p-3 d-flex justify-content-center" key={project.title}>
              <Card style={{ width: "18rem" }}><a href={project.link} target="_blank" rel="noreferrer">
                <Card.Img
                  variant="top"
                  src={project.src}
                  style={{ height: "10rem" }}
                /></a>
                
                <Card.Body>
                  <Card.Title>{project.title}
                  <Card.Link href={project.github} target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-github"></i></Card.Link>
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text className="icons">{project.iconHTML}{project.iconCSS}{project.iconJs}{project.iconNode}{project.iconNPM}{project.iconMDB}{project.iconReact}{project.iconTerm}{project.iconMicro}{project.iconChart}</Card.Text>
                  
                 
                  {/* <Button variant="primary" href={project.github} target="_blank"><i className="fa fa-github is-size-5" aria-hidden="true"></i> */}
  
                  {/* </Button> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <h1>Dashboards</h1>
<Dashboard/>
      <br></br><br></br>
    </Container>
  );
}


export default Project;
