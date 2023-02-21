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
import Project from "../Project";
import Nav from "react-bootstrap/Nav";
import Resume from "..//Resume";

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
          Design. Build. Test. Deploy. Repeat. <br></br>
          <em>Always Be Coding!</em>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="web-dev-modal">
        <h4>Why hire me as your Web Developer?</h4>
        <p>
          Check out just a few of my projects from the last year, and certainly,
          you'll see why I am an excellent candidate for your next WebDev
          opening.
        </p>
        <Project />
        <Nav.Link
          href="https://github.com/bnk5532"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click <i className="fa fa-github is-size-5" aria-hidden="true"></i> or
          anywhere else that you see the GitHub logo to access my other
          repositories.
        </Nav.Link>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
          <h3>
            Live Ops. Talk Tech. Know The Audience. <em>Now Be Human!</em>
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Why hire me as your DevOps Engineer?</h4>
        <p>
          <em>Well,</em> have a quick look at only a few highlights from my
          career on the diagram below and I think that you'll have to agree that
          I am an excellent candidate for your next DevOps opening.
        </p>
        <img
          className="d-block w-100 pb-3"
          src={DevOpsGraph}
          alt="DevOps graphic"
        />
        <h4>What is DevOps?</h4>
        <p>
          Broadly conceived, <strong>DevOps</strong> lives at the crossroads of
          the development, operations, and quality assurance divisions of a
          business and is of increasing importance as a company scales, drives
          out costs, and becomes more reliant on the technology to meet client,
          enterprise and stakeholder needs and expectations. A{" "}
          <strong>DevOps Engineer</strong> (<em>like me</em>) helps to ensure a
          seamless delivery on those priorities through a broader sense of the
          business, a current and working knowledge of available technologies
          and most especially, excellent communication and building of
          cross-functional relationships. You might imagine a generalist of this
          sort to be involved in everything from designing, building, testing,
          deploying, automating, and owning projects, processes or applications
          throughout their respective life cycles.
          {/* <br></br>
          <br></br>
          Dig into my experience, my credentials, reach out to my former leaders and teammates, and then let's start a conversation
          - I think that you'll find that DevOps is exactly where I belong! */}
        </p>
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
          Business Ops Analyst.{" "}
          <em>Supporting those that support our clients.</em>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Resume />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppWeb() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
        Web Developer &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Button>

      <MyWebDevModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function AppDev() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
        DevOps Engineer &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Button>

      <MyDevOpsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function AppSr() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
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
            <AppWeb />
            <AppDev />
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
