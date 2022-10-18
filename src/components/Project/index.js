import React from "react";
// import profilePic from "../../assets/images/Profile BNK.jpeg";
import pawFectPic from "../../assets/images/PawFect Pets.png";
import PilotHubPic from "../../assets/images/FlightHub.png";
import sunsetPic from "../../assets/images/Sunset 1.jpeg";
import regexPic from "../../assets/images/regex2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import CardGroup from 'react-bootstrap/CardGroup';


function Project() {
  return (
    <Container fluid>
      <Row>
        {/* <Col>
          <div className="p-6">
            <img
              class="profileImg rounded justify-content-left"
              src={profilePic}
              alt="BNK Profile"
            />
          </div>
        </Col> */}
        <Col className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={PilotHubPic} style={{ height: "10rem"}} />
            <Card.Body>
              <Card.Title>PilotHub</Card.Title>
              <Card.Text>
                Airport info to the nearest pint of beer, PilotHub has your six!
              </Card.Text>
              <Button variant="primary" href="https://jonbullin84.github.io/PilotHub/" target="_blank">Check-in!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pawFectPic} style={{ height: "10rem"}}  />
            <Card.Body>
              <Card.Title>Pawfect Friends</Card.Title>
              <Card.Text>
                It was time our pets joined us on social media, too!
              </Card.Text>
              <Button variant="primary" href="https://pawfect-friends-app.herokuapp.com/" target="_blank">Cute Pets!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sunsetPic} style={{ height: "10rem"}}  />
            <Card.Body>
              <Card.Title>Weather AboveGround</Card.Title>
              <Card.Text>
                Check your local weather in this easy-to-use dashboard.
              </Card.Text>
              <Button variant="primary" href="https://bnk5532.github.io/weather-aboveGround-app/" target="_blank">Check Now!</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={regexPic} style={{ height: "10rem"}}  />
            <Card.Body>
              <Card.Title>Get-The-Gist</Card.Title>
              <Card.Text>
                A handy guide to URL validation using REGEX.
              </Card.Text>
              <Button variant="primary" href="https://gist.github.com/bnk5532/569625d57471a0a33592185d77033e75" target="_blank">Get It Now!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
  // return (
  //   <CardGroup>
  //     <Card>
  //       <Card.Img variant="top" src={PilotHubPic} />
  //       <Card.Body>
  //         <Card.Title>Card title</Card.Title>
  //         <Card.Text>
  //           This is a wider card with supporting text below as a natural lead-in
  //           to additional content. This content is a little bit longer.
  //         </Card.Text>
  //       </Card.Body>
  //       <Card.Footer>
  //         <small className="text-muted">Last updated 3 mins ago</small>
  //       </Card.Footer>
  //     </Card>
  //     <Card>
  //       <Card.Img variant="top" src={pawFectPic}/>
  //       <Card.Body>
  //         <Card.Title>Card title</Card.Title>
  //         <Card.Text>
  //           This card has supporting text below as a natural lead-in to
  //           additional content.{' '}
  //         </Card.Text>
  //       </Card.Body>
  //       <Card.Footer>
  //         <small className="text-muted">Last updated 3 mins ago</small>
  //       </Card.Footer>
  //     </Card>
  //     <Card>
  //       <Card.Img variant="top" src="holder.js/100px160" />
  //       <Card.Body>
  //         <Card.Title>Card title</Card.Title>
  //         <Card.Text>
  //           This is a wider card with supporting text below as a natural lead-in
  //           to additional content. This card has even longer content than the
  //           first to show that equal height action.
  //         </Card.Text>
  //       </Card.Body>
  //       <Card.Footer>
  //         <small className="text-muted">Last updated 3 mins ago</small>
  //       </Card.Footer>
  //     </Card>
  //   </CardGroup>


  );
}

export default Project;
