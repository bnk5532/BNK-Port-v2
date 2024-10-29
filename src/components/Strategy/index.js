import React, {useEffect} from "react";
import bbc from "../../assets/images/bbc.png";
import landfill from "../../assets/pdf/BNKLandfill.pdf";
import bbcland from "../../assets/images/bbcland.png";
import autoFill from "../../assets/images/autofillDemo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function Strategy() {
  const strategies = [
    {
      title: "BBC Software Issue",
      description: "Presentation for a process improvement thought exercise.",
      link: "https://docs.google.com/presentation/d/1-PqLADenXVgb76KbOlc7kswEDqmRGwXDDI61G3MziKI/edit?usp=sharing",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      src: bbc,
    },
    {
      title: "BBC Landfill Congestion",
      description: "Example of a written scenario for process improvement.",
      link: landfill,
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      src: bbcland,
    },
    {
      title: "Autofill Document Script",
      description: "Demo of an automated document generator from a survey response.",
      link: "https://drive.google.com/file/d/1Kbs3XbO0XY5dPQIkQL6Af1IfGcaMx4FK/view",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      src: autoFill,
    },
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <Row>
        {strategies.map((strategy) => {
          return (
            <Col
              className="p-3 d-flex justify-content-center"
              key={strategy.title}
            >
              <Card style={{ width: "18rem" }}>
                <a href={strategy.link} target="_blank" rel="noreferrer">
                  <Card.Img
                    variant="top"
                    src={strategy.src}
                    style={{ height: "10rem" }}
                  />
                </a>

                <Card.Body>
                  <Card.Title>
                    {strategy.title}
                    {/* <Card.Link
                      href={strategy.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fa-solid fa-file-powerpoint"></i>
                    </Card.Link> */}
                  </Card.Title>
                  <Card.Text>{strategy.description}</Card.Text>
                  <Card.Text className="icons">
                    {strategy.iconMicro}
                    {strategy.iconGoogle}
                    {strategy.iconChart}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Strategy;
