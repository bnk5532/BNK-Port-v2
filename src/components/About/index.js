import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import familyPic1 from "../../assets/images/familyPic1.png";
import BannerFam1 from "../../assets/images/BannerFam1.JPG";
import WilKids1 from "../../assets/images/WilliamsKids22.JPG";
import xmas22 from "../../assets/images/xmasKids22.JPG";
import hallowKids22 from "../..//assets/images/HalloKids22.jpeg";
import easterKids22 from "../../assets/images/EasterKids22.JPG";
import wilFam22 from "../../assets/images/WilliamsburgFam22.jpg";
import BVPrague from "../../assets/images/BVPrague2.jpeg";
import OakIsland from "../../assets/images/OakIslandFam1.jpeg";
import BriVicSnow1 from "../../assets/images/BriVicSnow1.jpeg";
import DevOpsGraph from "../../assets/images/DevOpsGraphic.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyDevOpsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>What is a DevOps?</h4>
        <p>
          DevOps is the crossroads of a business's operations, quality assurance
          and development priorities, and employing experienced generalists with operations
          experience, a tech-forward mindset and an appreciation for quality is
          increasingly important as a company scales, drives out costs, and
          becomes more reliant on the technology to meet client, enterprise and stakeholder needs.
        </p>
        <img className="d-block w-100" src={DevOpsGraph} alt="DevOps graphic" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyWebDevModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <img
          className="d-block w-100"
          src={BVPrague}
          alt="Brian & Vlasta Prague 2018"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MySrAnalystModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <img
          className="d-block w-100"
          src={wilFam22}
          alt="Colonial Williamsburg Family 2022"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppDev() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="devOps-eng p-0" onClick={() => setModalShow(true)}>
        DevOps Engineer &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Button>

      <MyDevOpsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function AppWeb() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="webDev p-0" onClick={() => setModalShow(true)}>
        Web Developer &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Button>

      <MyWebDevModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
function AppSr() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="webDev p-0" onClick={() => setModalShow(true)}>
        Sr. Analyst
      </Button>

      <MySrAnalystModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={familyPic1}
          alt="Colonial Williamsburg Family 2019"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerFam1}
          alt="Banner Elk, NC Family 2022"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BVPrague}
          alt="Brian & Vlasta Prague 2018"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WilKids1}
          alt="Williamsburg Kids 2022"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={easterKids22}
          alt="Easter Kids 2022"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OakIsland}
          alt="Oak Island with kids 2018"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={xmas22}
          alt="Christmas with Daddy 2021"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BriVicSnow1}
          alt="Daddy & Victoria Snow 2018"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hallowKids22}
          alt="Gordonsville, VA Kids 2022"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wilFam22}
          alt="Colonial Williamsburg Family 2022"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function About() {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div className="about-me">
          {/* Web Developer &nbsp;|&nbsp; DevOps Engineer &nbsp;|&nbsp; Sr. Analyst  */}
          <span className="carousel">
            <AppDev />
            <AppWeb />
            <AppSr />
          </span>
          <br></br>
          <br></br>Brian is a web developer and an experienced business
          operations analyst with specialties in reporting, interface design and
          data visualizations, which he developed over the last 13 years of his
          professional career in the telecommunications and technology
          industries. Recently, he had taken a brief pause in his career to
          reinvest and up-skill his tech portfolio, so that he may pursue a new
          role with a software engineering component. Over the past year, he
          enrolled and graduated from the Full Stack Coding Boot Camp at
          UNC-Chapel Hill to learn the latest of the in-demand programming
          languages, skills, methods, tools and the mindset that are so critical
          in the wildly dynamic world of tech.
          <br></br>
          <br></br>
          In the coming months, Brian hopes to secure a new role where he can
          continue to add value with his experience as an Operations Sr. Analyst
          and flex those coding skills in either a Software Engineering or
          DevOps Engineering role at a great company with amazingly talented
          people.
          <br></br> <br></br>Brian calls the lower Cape Fear region of North
          Carolina home where he shares a beautiful life with his wife and two
          elementary school-aged children, and an elderly yorkshire terrier. He
          also has a love for the outdoors, history, fine cuisine, travel and an
          ever-widening range of other interests.
          <br></br> <br></br>
          <span className="carousel">
            <ControlledCarousel />
          </span>
          <br></br>
          Brian is looking forward to 2023, meeting new teammates, and finding
          his fit at an exciting company as a Software Engineer or DevOps
          Engineer!
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
