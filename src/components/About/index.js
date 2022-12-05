import React from "react";
import familyPic1 from "../../assets/images/familyPic1.png";

function About() {
  return (
    <div className="container">
      <h1>About me</h1>
      <div style={{ width: "100%" }}>
        <div className="about-pic">
          <img className="picture" src={familyPic1} alt="" />
        </div>

        <div className="about-text">
          <p>
            <br></br>
            <strong>Brian Nicholas King</strong>
            <br></br>
            <em>Operations Reporting Sr. Analyst & Web Developer</em>
            <br></br>
            <br></br>Brian is excited and proud to share that he has survived
            the rigors of the coding bootcamp through the University of North
            Carolina - Chapel Hill and is a newly minted web developer. Having
            spent the past 13 years of his professional career in business intel
            and reporting analytics while working in the telecommunications and
            technology industries, he had recently taken a pause in his career
            to pursue a new one in software engineering. Over the past 6 months,
            he has learned the the tech industry's wishlist of languages,
            skills, tools and the problem-solver mindset that is critical to
            successfully landing and maintaining a web developer career.
            <br></br> <br></br>
            Coding camp in the rear view, Brian is now looking forward to 2023,
            and the job hunt for a new role as a Junior Web Developer!
            <br></br> <br></br>Brian calls the lower Cape Fear region of North
            Carolina home where he shares a beautiful home with his wife and two elementary school aged children, and yorkshire terrier.
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
