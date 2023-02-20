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
import Nav from "react-bootstrap/Nav";


function BasicExample(changeSelected) {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/Resume">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
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
          Web Developer &nbsp;|&nbsp; DevOps Engineer &nbsp;|&nbsp; Sr. Analyst 
          <span className="carousel">
            <BasicExample />
          </span>
          <br></br>
          <br></br>Brian is a web developer and an experienced business
          operations analyst with specialties in reporting, interface design and
          data visualizations, which he developed over the last 13 years of his
          professional career in the telecommunications and technology
          industries. Recently, he had taken a brief pause in his career to
          reinvest and up-skill his tech portfolio, so that he may pursue a
          new role with a software engineering component. Over the past year, he
          enrolled and graduated from the Full Stack Coding Boot Camp at
          UNC-Chapel Hill to learn the latest of the in-demand programming
          languages, skills, methods, tools and the mindset that are so critical in the
          wildly dynamic world of tech.
          <br></br>
          <br></br>
          In the coming months, Brian hopes to secure a new role where he can
          continue to add value with his experience as an Operations Sr. Analyst
          and flex those coding skills in either a Software Engineering or DevOps
          Engineering role at a great company with amazingly talented people.

          <br></br> <br></br>Brian calls the lower Cape Fear region of North
          Carolina home where he shares a beautiful life with his wife and two
          elementary school-aged children, and an elderly yorkshire terrier. He also has
          a love for the outdoors, history, fine cuisine, travel and an
          ever-widening range of other interests.
          <br></br> <br></br>
          <span className="carousel">
            <ControlledCarousel />
          </span>
          <br></br>
          Brian is looking forward to 2023, meeting new teammates, and
          finding his fit at an exciting company as a Software Engineer or DevOps Engineer!
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
