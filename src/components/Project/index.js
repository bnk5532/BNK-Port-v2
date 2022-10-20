import React from "react";
import pawFectPic from "../../assets/images/PawFect Pets.png";
import PilotHubPic from "../../assets/images/FlightHub.png";
import sunsetPic from "../../assets/images/Sunset 1.jpeg";
import regexPic from "../../assets/images/regex2.png";
import eeKeepPic from "../../assets/images/eeKeep1.png";
import portPic1 from "../../assets/images/port1.png";
import passGenPic from "../../assets/images/passGen1.png";
import schedulerProPic from "../../assets/images/schedulerPro.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project() {
  const projects = [
    {
      title: "PilotHub",
      description:
        "Airport info to the nearest pint of beer, PilotHub has your six!",
      link: "https://jonbullin84.github.io/PilotHub/",
      src: PilotHubPic,
    },
    {
      title: "PawFect Friends",
      description: "It was time our pets joined us on social media, too!",
      link: "https://pawfect-friends-app.herokuapp.com/",
      src: pawFectPic,
    },
    {
      title: "Weather AboveGround",
      description: "Check your local weather in this easy-to-use dashboard.",
      link: "https://bnk5532.github.io/weather-aboveGround-app/",
      src: sunsetPic,
    },
    {
      title: "Get-The-Gist",
      description: "A handy guide to URL validation using REGEX.",
      link: "https://gist.github.com/bnk5532/569625d57471a0a33592185d77033e75",
      src: regexPic,
    },
    {
      title: "Scheduler Pro",
      description:
        "A website application to better manage daily chaos like a pro.",
      link: "https://bnk5532.github.io/myScheduler-pro/",
      src: schedulerProPic,
    },
    {
      title: "First Developer Portfolio",
      description: "Wow, just look how far we've come!",
      link: "https://bnk5532.github.io/BNK-Port/",
      src: portPic1,
    },
    {
      title: "Employee Keeper Pro",
      description:
        "Track employees stats relating to dept, title, salary and manager.",
      link: "https://watch.screencastify.com/v/BAeAlUdhEE5ilWnaY5TX",
      src: eeKeepPic,
    },
    {
      title: "Random Password App",
      description: "Generates random passwords using all characters types.",
      link: "https://bnk5532.github.io/rando-pass-gen/",
      src: passGenPic,
    },
  ];

  return (
    <Container fluid>
      <h1>Portfolio</h1>
      <Row>
        {projects.map((project) => {
          return (
            <Col className="p-2" key={project.title}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={project.src}
                  style={{ height: "10rem" }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Check it out!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Project;
