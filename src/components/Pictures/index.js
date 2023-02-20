import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Prague1 from "../../assets/images/Prague1.jpeg";
import Prague2 from "../../assets/images/Prague2.jpeg";
import Prague3 from "../../assets/images/Prague3.jpeg";
// import Prague4 from "../../assets/images/Prague4.jpeg";
// import Prague5 from "../../assets/images/Prague5.jpeg";
// import Prague6 from "../../assets/images/Prague6.jpeg";
// import Prague7 from "../../assets/images/Prague7.jpeg";

function Picture() {
  const pictures = [
    {
      key: "1",
      src: { Prague1 },
    },
    {
      key: "2",
      src: { Prague2 },
    },
    {
      key: "3",
      src: { Prague3 },
    },
    // {
    //     src: {Prague4}
    // },
    // {
    //     src: {Prague5}
    // },
    // {
    //     src: {Prague6}
    // },
    // {
    //     src: {Prague7}
    // },
    {
      src: "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net",
    },
  ];

  return (
    <Container fluid>
      <h1>Pictures</h1>
      <Row>
        {pictures.map((picture) => {
          return (
            <Col
              className="p-1 d-flex justify-content-center"
              key={picture.title}
            >
              <Card style={{ width: "18rem" }}>
                <a href={picture.link} target="_blank" rel="noreferrer">
                  <Card.Img src={picture.src} style={{ height: "12rem" }} />
                </a>
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

export default Picture;
