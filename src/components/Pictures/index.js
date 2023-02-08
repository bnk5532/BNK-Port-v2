import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Pictures() {
    const pictures = [
        {
            src: "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com" 
        },
        {
            src: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com" 
        },
        {
            src: "https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com" 
        },
        {
            src: "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" 
        },
        {
            src: "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com" 
        },
        {
            src: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com" 
        },
        {
            src: "https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com" 
        },
        {
            src: "https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" 
        },
    ];

return (
<Container fluid>
      <h1>Pictures</h1>
      <Row>
        {pictures.map((picture) => {
          return (
            <Col className="p-3 d-flex justify-content-center" key={picture.title}>
              <Card style={{ width: "18rem" }}><a href={picture.link} target="_blank" rel="noreferrer">
                <Card.Img
                  variant="top"
                  src={picture.src}
                  style={{ height: "10rem" }}
                /></a>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br></br><br></br>
    </Container>
  );
}

export default Pictures;