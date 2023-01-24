import React from "react";
import bnkCv from "../../assets/pdf/BNKCV2023v1dot3.pdf";
import codeBadge1 from "../../assets/images/codeBadge1.png";

function Resume() {
  return (
    <div className="mx-3 pb-2">
      <h1>
        Resume{" "}
        <a href={bnkCv} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-file-pdf"></i>
        </a>
      </h1>

      <div className="resume">
        <br></br>
        <strong>EXPERIENCE</strong>
        <br></br>
        <br></br>
        <strong>Verizon, Sr. Analyst, HQ Operations, </strong>
        <em>2020 - 2022.</em>
        <br></br>
        Primarily responsible for any and all reporting with regard to
        absenteeism and leave-related data for a Sr. Manager, Director, and Vice
        President audience for the entire U.S.-based Customer Service, Tech and
        Specialty workgroups.<br></br>
        <br></br>
        <strong>Verizon, Coordinator, HQ Operations, </strong>
        <em>2016 - 2020.</em>
        <br></br>
        Operated at the leading edge of a risk management team, partnered with
        call center business leaders, operations, and HR to ensure accurate
        time-keeping practices, leave-of-absence (LOA) claim reporting to
        vendors and adherence to headquarters HR corporate guidelines and
        compliance with Federal and State laws.<br></br>
        <br></br>
        <strong>Verizon, Analyst, Field Operations, </strong>
        <em>2014 - 2016.</em>
        <br></br>
        Served as the project administrator on a small specialized team that
        prioritized the implementation of a digital platform that promoted ideal
        behaviors as identified or aligned with the business objectives of the
        contact center call-taking population.<br></br>
        <br></br>
        <strong>EDUCATION</strong>
        <br></br>
        <br></br>
        <strong>The University of North Carolina – Chapel Hill</strong>{" "}
        <br></br>
        <em>Certificate, Coding Bootcamp, 2022.</em> <br></br>
        Intensive 24-week coding bootcamp curriculum that qualifies and prepares
        graduates for transition into full stack web developer roles.
        <br></br>
        <br></br>
        <strong>Strayer University</strong>
        <br></br>
        <em>
          Master of Business Administration, M.B.A. Acquisitions, 2012.
        </em>{" "}
        <br></br>
        Conferred with honors.
        <br></br>
        <br></br>
        <strong>University of North Carolina – Wilmington </strong>
        <br></br>
        <em>Bachelor of Arts, B.A. Anthropology, 2008.</em>
        <br></br>
        Forensic Science minor. Lambda Alpha Honors Society Lifetime Member.
        <br></br>
        <br></br>
        <strong>PROFESSIONAL DEVELOPMENT</strong>
        <br></br>
        <br></br>
        Verizon Scrum Master Badge <br></br>
        Verizon Agile Mindset Program Badge <br></br>
        Verizon Lean Six Sigma (VLSS) <br></br>
        Verizon Project & Management Fundamentals <br></br>
        Udemy.com – JavaScript Algorithms & Data Structures Masterclass (
        <em>In Progress</em>)<br></br>
        <br></br>
        <strong>TECHNICAL SKILLS</strong>
        <br></br>
        <br></br>
        <strong>Languages:</strong> HTML5, CSS3, JavaScript, SQL. 
        <br></br>
        <br></br>
        <strong>Concepts:</strong> Responsive Design,
        Big O Notation, TDD, Agile Development, Data Structures, Security &
        Session Storage, Local Storage, User Authentication and Database
        Management. 
        <br></br>
        <br></br>
        <strong>Tools:</strong> Bootstrap, Bulma, Materialize, Handlebars, MERN stack
        (MongoDB, Express.js, React.js, Node.js), React Router, Apollo GraphQL,
        Heroku, Inquirer CLI, JWT, Insomnia, Git, GitHub, GitHub Gists, Google
        Data Studio, MySQL, NoSQL, NPM packages, VS Code, Google Suite, and
        Microsoft Office.
        <br></br>
        <br></br>
        <strong>INDUSTRY INTERESTS</strong>
        <br></br>
        <br></br>
        Aerospace & Defense <br></br>
        Commercial Aviation <br></br>
        Web Development & DevOps <br></br>
        Acquisitions <br></br>
        Automation & Networking <br></br>
        Logistics & Supply Chain <br></br>
       <br></br>
      </div>
      <br></br>
      <br></br>
      <a
        href="https://www.credly.com/badges/a2526be3-fc55-45e8-8c4b-db81fb685808/linked_in?t=rm9jm1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="badge1" src={codeBadge1} alt="" />
      </a>
    </div>
  );
}

export default Resume;
