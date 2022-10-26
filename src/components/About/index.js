import React from "react";
import familyPic1 from "../../assets/images/familyPic1.png";

function About() {
  return (
    <div className="container">
      <h1>About me</h1>
      <div style={{width: '100%'}}>
        
        <div className="about-pic">
        <img
          className="picture"
          src={familyPic1}
          alt=""
        />
        </div>
        
        <div className="about-text">
        <p>
          <br></br>
          <strong>Brian Nicholas King</strong>
          <br></br>
          <em>Operations Reporting Sr. Analyst & Web Developer</em>
          <br></br>
          <br></br>With over 13 years of professional experience in business
          intel and reporting analytics while working in the telecommunications
          and technology industries, I have taken a recent pause in my career to
          pursue a new one in software engineering, and I am living the
          "coding-life," as I regularly quip to friends and family. I currently
          reside in the lower Cape Fear region of NC with my wife,
          Vlasta-like-pasta, and two children, affectionately known as
          Victoria-the-Great, and Brian-the-Terrible. <br></br>
          <br></br>
          <em>I do hope that you enjoy my portfolio!</em>
        </p>
        </div>
      </div>
    </div>
  );
}

export default About;
