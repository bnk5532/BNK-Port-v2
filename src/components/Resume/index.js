import React from "react";
import bnkCv from "../../assets/pdf/BNKCV2023v1dot3.pdf";
import codeBadge1 from "../../assets/images/codeBadge1.png";
import UNC1 from "../../assets/images/UNC1.png";
import UNCW from "../../assets/images/uncw3.png";
import Strayer from "../../assets/images/Strayer1.png";

function Resume() {
  return (
    <div className="mx-3 pb-2">
      <h1>
        Resume{" "}
        <a href={bnkCv} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-file-pdf pdf-icon"></i>
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
        Specialty work groups.<br></br>
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
        <br></br> <br></br>
          <img
          src={UNC1}
          width="200px"
          height="55px"
          className="d-inline-block mb-1"
          alt="UNC Logo"
        />
        <br></br>
        <em>Certificate, Coding Boot Camp, 2022.</em> <br></br>
        Intensive 24-week coding boot camp curriculum that qualifies and prepares
        graduates for transition into full stack web developer roles.
        <br></br> <br></br>
        <img
          src={Strayer}
          width="200px"
          height="44px"
          className="d-inline-block mb-1"
          alt="UNC Logo"
        />
        <br></br>
        <em>
          Master of Business Administration, M.B.A. Acquisitions, 2012.
        </em>{" "}
        <br></br>
        Conferred with honors.
        <br></br>
        <br></br>
        <img
          src={UNCW}
          width="200px"
          height="53px"
          className="d-inline-block mb-1"
          alt="UNC Logo"
        />
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
        <strong>Languages:</strong> HTML <i className="fa-brands fa-html5"></i>,
        CSS <i className="fa-brands fa-css3-alt"></i>, JavaScript{" "}
        <i className="fa-brands fa-square-js"></i>, SQL.
        <br></br>
        <br></br>
        <strong>Concepts:</strong> Responsive Design, Big O Notation, TDD, Agile
        Development, Data Structures, Security & Session Storage, Local Storage,
        User Authentication and Database Management.
        <br></br>
        <br></br>
        <strong>Tools:</strong> Bootstrap{" "}
        <i className="fa-brands fa-bootstrap"></i>, Bulma, Materialize,
        Handlebars, Font Awesome <i className="fa-solid fa-font-awesome"></i>,
        MongoDB <i className="fa-brands fa-mdb"></i>, Express.js, React.js{" "}
        <i className="fa-brands fa-react"></i>, Node.js{" "}
        <i className="fa-brands fa-node-js"></i>, React Router, Apollo GraphQL,
        Heroku, Inquirer CLI, Terminal <i className="fa-solid fa-terminal"></i>,
        JSON, JWT, Insomnia, Git <i className="fa-brands fa-git"></i>, GitHub{" "}
        <i className="fa-brands fa-square-github"></i>, GitHub Gists, Google
        Data Studio, MySQL, NoSQL, NPM <i className="fa-brands fa-npm"></i>, VS
        Code, Google Suite <i className="fa-brands fa-google"></i>, Microsoft
        Office <i className="fa-brands fa-microsoft"></i>, Apple IOS{" "}
        <i className="fa-brands fa-apple"></i>.<br></br>
        <br></br>
        <strong>INDUSTRY INTERESTS</strong>
        <br></br>
        <br></br>
        Aerospace & Defense <i className="fa-solid fa-jet-fighter"></i>{" "}
        <br></br>
        Commercial Aviation <i className="fa-solid fa-plane-departure"></i>
        <br></br>
        Web Development & DevOps <i className="fa-solid fa-code"></i>
        <br></br>
        Acquisitions <i className="fa-solid fa-file-contract"></i>
        <br></br>
        Automation & Networking <i className="fa-solid fa-circle-nodes"></i>
        <br></br>
        Logistics & Supply Chain <i className="fa-solid fa-truck-fast"></i>
        <br></br>
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
