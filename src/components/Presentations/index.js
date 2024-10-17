import React from "react";
import slidesPF from "../../assets/images/slidesPF.png";
import slidesPU from "../../assets/images/slidesPU.png";
import BBslides1 from "../../assets/images/BBPetHealth1.png";
import BBHPro1 from "../../assets/images/bbhProduct1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Presentation() {
  const presentations = [
    {
      title: "Data Modeling & Forecast",
      description: "A Google Slides presentation.",
      link: "https://docs.google.com/presentation/d/1lzdwl14D0CimK5tsg2zzZWWGrXSoX1D5AsoX2pANPZo/edit?usp=sharing",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      iconChart: <i className="fa-solid fa-chart-pie icons"></i>,
      src: BBslides1,
    },
    {
      title: "New Product Feature",
      description: "A 24-HR Product Case Study.",
      link: "https://docs.google.com/presentation/d/1OEzFR5_IT0Po46voDXvkC-kBc92UHVEpYwLhVyKNwRs/edit?usp=sharing",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      src: BBHPro1,
    },
    {
      title: "Pawfect Friends Deck",
      description: "A Google Slides presentation.",
      link: "https://docs.google.com/presentation/d/1RuyUWduvMP5ZIQu9EacTzq_cFrdRpKgBh793Ytm0Ejo/edit?usp=sharing",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      src: slidesPF,
    },
    {
        title: "Player Up Deck",
        description: "A Google Slides presentation.",
        link: "https://docs.google.com/presentation/d/1e18zKzUbJW_ctse-gs-9G0CQ4kZBTQ6Zh7mtgnI7ZkI/edit?usp=sharing",
        iconGoogle: <i className="fa-brands fa-google icons"></i>,
        src: slidesPU,
      }, 
  ];

  return (
    <Container fluid>
      <Row>
        {presentations.map((presentation) => {
          return (
            <Col
              className="p-3 d-flex justify-content-center"
              key={presentation.title}
            >
              <Card style={{ width: "18rem" }}>
                <a href={presentation.link} target="_blank" rel="noreferrer">
                  <Card.Img
                    variant="top"
                    src={presentation.src}
                    style={{ height: "10rem" }}
                  />
                </a>

                <Card.Body>
                  <Card.Title>
                    {presentation.title}
                  </Card.Title>
                  <Card.Text>{presentation.description}</Card.Text>
                  <Card.Text className="icons">
                    {presentation.iconGoogle}
                    {presentation.iconChart}
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

export default Presentation;
