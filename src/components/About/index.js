import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import familyPic1 from "../../assets/images/familyPic1.png";
import BannerFam1 from "../../assets/images/BannerFam1.JPG";
import WilKids1 from "../../assets/images/WilliamsKids22.JPG";

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
          alt="First slide"
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
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WilKids1}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

function About() {
  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        {/* <div className="about-pic">
          <img className="picture" src={familyPic1} alt="" />
        </div> */}
        <div className="about-me">
          <p>
            Operations Professional | Reporting | Sr. Analyst | Web Developer
            <p className="about-text">
              <br></br>Brian is excited and proud to share that he has just
              survived the rigors of the coding bootcamp through the University
              of North Carolina - Chapel Hill and is a newly minted web
              developer. Having spent the better part of past 13 years of his
              professional career in business intel and reporting analytics
              while working in the telecommunications and technology industries,
              he had recently taken a pause in his career to pursue a new one in
              software engineering. Over the past 6 months, he has learned the
              tech industry's wishlist of programming languages, skills,
              methods, tools and the problem-solver mindset that is critical to
              successfully landing and maintaining a career in web development.
              <br></br> <br></br>Brian calls the lower Cape Fear region of North
              Carolina home where he shares a beautiful life with his wife and
              two elementary school-aged children, and a yorkshire terrier. He
              also has a love for the outdoors, history, fine cuisine, travel
              and an ever-widening range of other interests.
              <br></br> <br></br>
              <div className="carousel">
                
                <ControlledCarousel />
                
              </div>
              <br></br> 
              Coding camp in the rear view, Brian is looking forward to 2023,
              and starting a new role as a Web Developer or DevOps Engineer!
              <br></br>
              <br></br>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
