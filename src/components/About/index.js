import React from "react";

import DevOpsGraph from "../../assets/images/DevOpsGraphic.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Resume from "..//Resume";
import Dashboard from "../Dashboards";
import Presentation from "../Presentations";
import Strategy from "../Strategy";

function MyStratModal(props) {
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
        <h4>Why hire me as your Strategy Analyst?</h4>
        <p>
          <em>Well,</em> have a quick look at only a few highlights from my
          career on the diagram below and I think that you'll have to agree that
          I am an excellent candidate for your next Strategy or Process
          Improvement Analyst opening.
        </p>
        <img
          className="d-block w-100 pb-3"
          src={DevOpsGraph}
          alt="DevOps graphic"
        />
        <h4>What is Strategy & Continuous Improvement?</h4>
        <p>
          Broadly conceived, a business strategist lives at the crossroads of
          many different disciplines and specialties, which in a modern context
          might include knowledge or experience in software development,
          operations, project management, process improvement, and quality
          assurance just to name a few heavy hitters. Saving money and improving
          upon efficiencies is often as important, if not more, than finding new
          sources of revenue for long term sustainability and growth. It is of
          obvious and increasing importance as a company scales that they
          continue to review and renew efforts to drive out costs, and become
          more reliant on technology and LEAN methodology to meet client,
          enterprise and stakeholder needs and expectations. A{" "}
          <strong>Strategy Analyst</strong> (<em>like me</em>) helps to ensure a
          seamless delivery on those priorities through a broader sense of the
          business, a current and working knowledge of available technologies,
          knowledge of the development lifecycle and most especially, excellent
          communication skills and a talent for building and maintaining
          cross-functional relationships. You might imagine a generalist of this
          sort to be involved in everything from designing, building, testing,
          deploying, automating, securing, and owning projects, processes or
          applications throughout their respective evolutions.
          <br></br>
          <br></br>
          Problem solving is at my core and it's simply how I am wired, so
          please check out some of the examples below to see how I think through
          these challenges and offer up solutions that are inexpensive,
          sustainable, agreeable, thoughtful and most importantly in my book,
          that they have the lightest touch possible to achieve our stated
          goals.
          {/* <br></br>
          <br></br>
          Dig into my experience, my credentials, reach out to my former leaders and teammates, and then let's start a conversation
          - I think that you'll find that DevOps is exactly where I belong! */}
        </p>
        <h2>Dashboards & Tools</h2>
        <Dashboard />
        <h2>Strategy & Process Improvement</h2>
        <Strategy />
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
        <h4>Why hire me as your Business Analyst?</h4>
        <p>
          Check out these fun dashboard visualizations, my presentation building
          skills and review my experience as a Sr. Operations Analyst to get a
          little taste of what I can do for you and your company!
        </p>
        <h2>Dashboards & Tools</h2>
        <Dashboard />
        <h2>Strategy & Process Improvement</h2>
        <Strategy />
        <h2>Presentations</h2>
        <Presentation />
        <Resume />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppSr() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
        Senior Operations Analyst &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      </Button>

      <MySrAnalystModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function AppStrat() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
        Strategist
      </Button>

      <MyStratModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

function About() {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div className="about-me">
          {/* Web Developer &nbsp;|&nbsp; DevOps Engineer &nbsp;|&nbsp; Sr. Analyst  */}
          <span className="carousel">
            <AppSr />
            {/* <AppDev /> */}
            <AppStrat />
          </span>
          <br></br>
          <br></br>
          
          <p>
            My name is Brian, and I am an experienced{" "}
            <strong>senior operations analyst</strong> with over{" "}
            <strong>14 years</strong> of experience in the
            telecommunications, technology, and consulting industries.{" "}
          </p>
          <p>
            {" "}
            I earned a <strong>Master of Business Administration</strong> with
            a concentration in <em>Acquisitions</em> from Strayer University,
            and a Bachelor of Arts in <em>Anthropology</em> from the University
            of North Carolina Wilmington.
          </p>
          <p>
            Most recently, I graduated from a{" "}
            <strong>450+ hour, Coding Boot Camp</strong> at the University of
            North Carolina Chapel Hill to learn Javascript web development and
            to become better equipped to meet the challenges of the business
            world as it goes full tilt into digital transformation era where
            technology touches all aspects of our daily lives.
          </p>
          <p>
            I revel in the <strong>challenge </strong> of working out problems where others have
            failed or passed on them previously. I lead with the conviction that
            the <strong>solution</strong> can, and most often, should be, simple, targeted, and
            relatively inexpensive to fix while having a <strong>meaningful impact </strong> on
            those things or people that actually matter.
            <br></br>
            <br></br>
            <p>
              <strong>A work ethic to live by...{" "}</strong>
             
            <q>
              <em>
                fail quick, seize initiative, forget the blame, support the
                team, and always maintain a glowing sense of humor!
              </em>{" "}
            </q>
            </p>
            <br></br>
          </p>

          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
