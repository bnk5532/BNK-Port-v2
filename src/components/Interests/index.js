// import React, {useState} from "react";
// import Carousel from "react-bootstrap/Carousel";
// import familyPic1 from "../../assets/images/familyPic1.png";
import BannerFam1 from "../../assets/images/BannerFam1.JPG";
import WilKids1 from "../../assets/images/WilliamsKids22.JPG";
import xmas22 from "../../assets/images/xmasKids22.JPG";
import hallowKids22 from "../..//assets/images/HalloKids22.jpeg";
import easterKids22 from "../../assets/images/EasterKids22.JPG";
import wilFam22 from "../../assets/images/WilliamsburgFam22.jpg";
import VEKbridge from "../../assets/images/VEKbridge.jpg";
import Oakisl1 from "../../assets/images/OakIsl1.jpg";
import OldPoint from "../../assets/images/OldPoint.png";
import VAKtrump1 from "../../assets/images/VAKtrump1.jpg";
import FtAnd2 from "../../assets/images/FtAnd2.jpg";
import Bretzel1 from "../../assets/images/Bretzel1.jpg";
import CWkids1 from "../../assets/images/CWkids1.png";
import CWkids2 from "../../assets/images/CWkids2.png";
import BelvilleKids1 from "../../assets/images/BelvilleKids1.png";
import BVPrague from "../../assets/images/BVPrague2.jpeg";
import VEKf2 from "../../assets/images/VEKf2.JPG";
import KidsAzal from "../../assets/images/KidsAzaleas1.JPG";
// import OakIsland from "../../assets/images/OakIslandFam1.jpeg";
// import BriVicSnow1 from "../../assets/images/BriVicSnow1.jpeg";
import React from "react";
import {
  // MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

// import DevOpsGraph from "../../assets/images/DevOpsGraphic.png";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Project from "../Project";
// import Nav from "react-bootstrap/Nav";
// import Resume from "..//Resume";
// import Dashboard from "../Dashboards";
// import Presentation from "../Presentations";
// import Strategy from "../Strategy";

// function MyWebDevModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Design. Build. Test. Deploy. Repeat. <br></br>
//           <em>Always Be Coding!</em>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="web-dev-modal">
//         <h4>Why hire me as your Web Developer?</h4>
//         <p>
//           Check out just a few of my projects from the last year, and certainly,
//           you'll see why I am an excellent candidate for your next WebDev
//           opening.
//         </p>
//         <Project />
//         <Nav.Link
//           href="https://github.com/bnk5532"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click <i className="fa fa-github is-size-5" aria-hidden="true"></i> or
//           anywhere else that you see the GitHub logo to access my other
//           repositories.
//         </Nav.Link>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function MyDevOpsModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           <h3>
//             Live Ops. Talk Tech. Know The Audience. <em>Now Be Human!</em>
//           </h3>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Why hire me as your DevOps Analyst?</h4>
//         <p>
//           <em>Well,</em> have a quick look at only a few highlights from my
//           career on the diagram below and I think that you'll have to agree that
//           I am an excellent candidate for your next DevOps opening.
//         </p>
//         <img
//           className="d-block w-100 pb-3"
//           src={DevOpsGraph}
//           alt="DevOps graphic"
//         />
//         <h4>What is DevOps?</h4>
//         <p>
//           Broadly conceived, <strong>DevOps</strong> lives at the crossroads of
//           the development, operations, and quality assurance divisions of a
//           business and is of increasing importance as a company scales, drives
//           out costs, and becomes more reliant on the technology to meet client,
//           enterprise and stakeholder needs and expectations. A{" "}
//           <strong>DevOps Analyst</strong> (<em>like me</em>) helps to ensure a
//           seamless delivery on those priorities through a broader sense of the
//           business, a current and working knowledge of available technologies,
//           knowledge of the development lifecycle and most especially, excellent
//           communication and building of cross-functional relationships. You
//           might imagine a generalist of this sort to be involved in everything
//           from designing, building, testing, deploying, automating, securing,
//           and owning projects, processes or applications throughout their
//           respective evolutions.
//           {/* <br></br>
//           <br></br>
//           Dig into my experience, my credentials, reach out to my former leaders and teammates, and then let's start a conversation
//           - I think that you'll find that DevOps is exactly where I belong! */}
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function MyStratModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           <h3>
//             Live Ops. Talk Tech. Know The Audience. <em>Now Be Human!</em>
//           </h3>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Why hire me as your Strategy Analyst?</h4>
//         <p>
//           <em>Well,</em> have a quick look at only a few highlights from my
//           career on the diagram below and I think that you'll have to agree that
//           I am an excellent candidate for your next Strategy or Process
//           Improvement Analyst opening.
//         </p>
//         <img
//           className="d-block w-100 pb-3"
//           src={DevOpsGraph}
//           alt="DevOps graphic"
//         />
//         <h4>What is Strategy & Continuous Improvement?</h4>
//         <p>
//           Broadly conceived, a business strategist lives at the crossroads of
//           many different disciplines and specialties, which in a modern context
//           might include knowledge or experience in software development,
//           operations, project management, process improvement, and quality
//           assurance just to name a few heavy hitters. Saving money and improving
//           upon efficiencies is often as important, if not more, than finding new
//           sources of revenue for long term sustainability and growth. It is of
//           obvious and increasing importance as a company scales that they
//           continue to review and renew efforts to drive out costs, and become
//           more reliant on technology and LEAN methodology to meet client,
//           enterprise and stakeholder needs and expectations. A{" "}
//           <strong>Strategy Analyst</strong> (<em>like me</em>) helps to ensure a
//           seamless delivery on those priorities through a broader sense of the
//           business, a current and working knowledge of available technologies,
//           knowledge of the development lifecycle and most especially, excellent
//           communication skills and a talent for building and maintaining
//           cross-functional relationships. You might imagine a generalist of this
//           sort to be involved in everything from designing, building, testing,
//           deploying, automating, securing, and owning projects, processes or
//           applications throughout their respective evolutions.
//           <br></br>
//           <br></br>
//           Problem solving is at my core and it's simply how I am wired, so
//           please check out some of the examples below to see how I think through
//           these challenges and offer up solutions that are inexpensive,
//           sustainable, agreeable, thoughtful and most importantly in my book,
//           that they have the lightest touch possible to achieve our stated
//           goals.
//           {/* <br></br>
//           <br></br>
//           Dig into my experience, my credentials, reach out to my former leaders and teammates, and then let's start a conversation
//           - I think that you'll find that DevOps is exactly where I belong! */}
//         </p>
//         <h2>Dashboards & Tools</h2>
//         <Dashboard />
//         <h2>Strategy & Process Improvement</h2>
//         <Strategy />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function MySrAnalystModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Business Ops Analyst.{" "}
//           <em>Supporting those that support our clients.</em>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Why hire me as your Business Analyst?</h4>
//         <p>
//           Check out these fun dashboard visualizations, my presentation building
//           skills and review my experience as a Sr. Operations Analyst to get a
//           little taste of what I can do for you and your company!
//         </p>
//         <h2>Dashboards & Tools</h2>
//         <Dashboard />
//         <h2>Strategy & Process Improvement</h2>
//         <Strategy />
//         <h2>Presentations</h2>
//         <Presentation />
//         <Resume />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function AppSr() {
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
//         Sr. Ops Analyst &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       </Button>

//       <MySrAnalystModal show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// // function AppDev() {
// //   const [modalShow, setModalShow] = React.useState(false);
// //   return (
// //     <>
// //       <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
// //         DevOps Analyst &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
// //       </Button>

// //       <MyDevOpsModal show={modalShow} onHide={() => setModalShow(false)} />
// //     </>
// //   );
// // }
// function AppStrat() {
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
//         Strategy Analyst &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       </Button>

//       <MyStratModal show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }
// function AppWeb() {
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <>
//       <Button variant="btn-title p-0" onClick={() => setModalShow(true)}>
//         Web Developer
//       </Button>

//       <MyWebDevModal show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={familyPic1}
//           alt="Colonial Williamsburg Family 2019"
//         />
//         {/* <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption> */}
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BannerFam1}
//           alt="Banner Elk, NC Family 2022"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BVPrague}
//           alt="Brian & Vlasta Prague 2018"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={WilKids1}
//           alt="Williamsburg Kids 2022"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={easterKids22}
//           alt="Easter Kids 2022"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={OakIsland}
//           alt="Oak Island with kids 2018"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={xmas22}
//           alt="Christmas with Daddy 2021"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={BriVicSnow1}
//           alt="Daddy & Victoria Snow 2018"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={hallowKids22}
//           alt="Gordonsville, VA Kids 2022"
//         />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={wilFam22}
//           alt="Colonial Williamsburg Family 2022"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

function PhotoGrid() {
  return (
    <MDBRow>
      <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
        <img
          src={OldPoint}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Old Point Lighthouse, Virginiar"
        />

        <img
          src={WilKids1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. in Williamsburg, Virginia"
        />

        <img
          src={FtAnd2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlasta & Kids at Ft. Anderson, NC"
        />

        <img
          src={VEKbridge}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria on bridge in Waterford"
        />
        <img
          src={CWkids1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. in Colonial Williamsburg"
        />
        
        <img
          src={KidsAzal}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. in with Azaleas"
        />


      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={easterKids22}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. at Porters Neck Easter Event"
        />

        <img
          src={hallowKids22}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. on pumpkin wagon"
        />
        <img
          src={Oakisl1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Brian with kids at Oak Island, NC"
        />
         <img
          src={BVPrague}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Brian & Vlasta in Prague, CZ"
        />
        <img
          src={BelvilleKids1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. at Belville Park"
        />
          <img
          src={Bretzel1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Yorkshire Terrier Bretzel posing in woods"
        />
      </MDBCol>

      <MDBCol lg={4} className="mb-4 mb-lg-0">
        <img
          src={BannerFam1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Family at Banner Elk Winery"
        />

        <img
          src={xmas22}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Family on Christmas morning, 2022"
        />

        <img
          src={wilFam22}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Family in Colonial Williamsburg"
        />

<img
          src={VAKtrump1}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Vlasta at Trump winery"
        />

<img
          src={CWkids2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria & Brian Jr. in Colonial Williamsburg"
        />
        <img
          src={VEKf2}
          className="w-100 shadow-1-strong rounded mb-4"
          alt="Victoria in flowers"
        />
      </MDBCol>
    </MDBRow>
  );
}

function Interests() {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <div className="about-me">
          {/* Web Developer &nbsp;|&nbsp; DevOps Engineer &nbsp;|&nbsp; Sr. Analyst  */}
          <span className="carousel">
            {/* <AppSr />
            {/* <AppDev /> */}
            {/* <AppStrat /> */}
            {/* <AppWeb /> */}
          </span>
          {/* <br></br>
          <br></br>Brian is an experienced business operations analyst with
          specialties in reporting, strategy, process improvement, data
          analysis, quantitative/qualitative methods, storytelling, and
          dashboard visualizations, which he has developed over the last 14
          years of his professional career in the telecommunications,
          technology, and consulting industries. Last year, he took advantage of an opportunity
          to reinvest and up-skill his portfolio to better prepare for the
          future demands of the job market and its increasing reliance on
          technical products, solutions, and services across all sectors. With
          this outlook in mind, Brian enrolled and graduated from the Full Stack
          Coding Boot Camp at UNC-Chapel Hill to learn and get hands on
          experience with the latest of the in-demand programming languages,
          skills, methods, tools and the mindset that are so critical in the
          wildly dynamic world of business and technology. On the side, Brian
          has been consulting at a local law firm to improve upon the practice's
          marketing strategy, client relations, office efficiencies and other
          business development opportunities. He has also completed a UAS
          drone pilot ground school, and is preparing to take the FAA Part 107
          licensing exam, which will lay the foundations for a small business
          opportunity that is ready to spin up and take advantage of a growing
          and potentially lucrative commercial market in the future.
          <br></br> */}
          FAMILY &nbsp;&nbsp;|&nbsp;&nbsp; TRAVEL &nbsp;&nbsp;|&nbsp;&nbsp;
          EXPERIENCES &nbsp;&nbsp;|&nbsp;&nbsp; OUTDOORS
          <br></br>
          <br></br>
          <h2>
            Interests
            <span>
              <h6>
                <em>(and thank you for your interest...)</em>
              </h6>
            </span>
          </h2>
          <p>
            In this section, I wanted to take some liberties and share a bit
            more about my interests, values, motivations and those things that
            keep me grounded and inform my decisions both in life and in
            business.{" "}
            <em>This is just for fun, so I do hope that you will enjoy!</em>
          </p>
          <p>
            The lower Cape Fear region of North Carolina is where I call home
            and share a beautiful life with my wife, Vlasta and two elementary
            school-aged children, Victoria and Brian Jr. and our 16 year old
            yorkshire terrier, Bretzel.
          </p>
          <p>
            I have a great love for the outdoors, history, fine cuisine, travel,
            collecting, aviation, photography, wildlife, DIY projects, and an
            ever-widening range of other hobbies and interests. I am lucky to
            share many of these interests and experiences with my close family
            and friends!
          </p>
          <p>
            We are so fortunate and thankful for all that we have been given and
            achieved so far! Thank you, <em>thank you,</em> especially to all of
            those that have supported us and our dreams along the way.{" "}
            <em>Life really is good!</em>
          </p>
          {/* 2024 is going to be a great year, and we have so much to look forward
          to and to be thankful for! With our youngest having started
          kindergarten this past year, Brian hopes to secure a new permanent
          role in a growing and fast moving industry where he can continue to
          add value and insight derived from his corporate business experience
          and that of his independent consulting background while also
          leveraging his knowledge of the development lifecycle, reporting,
          strategy and process improvement at a great company with amazingly
          talented people. Brian prefers to solve big problems with the lightest
          touch possible, and believes that it is important to fail quickly,
          take initiative, prioritize the solution over the blame, and always
          maintain a sense of humor, self-awareness, humility, and a global
          perspective to avoid mission creep and achieve desirable outcomes.
          <br></br> <br></br> */}
          {/* <span className="carousel">
            <ControlledCarousel />
            
          </span> */}
          <PhotoGrid />
         
          {/* Brian is excited for a fresh start in 2024! He also hopes to meet new
          teammates, leaders, and clients, building on those relationships, and
          earning his place at an exciting company that leads with technological
          solutions that improve our lives, our interactions, and how we choose
          to do business going forward! */}
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Interests;
