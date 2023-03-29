// import React from "react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import bnkCv from "../../assets/pdf/BNKCV2023v1dot4.pdf";
import codeBadge1 from "../../assets/images/codeBadge1.png";
import UNC1 from "../../assets/images/UNC1.png";
import UNCW from "../../assets/images/uncw3.png";
import Strayer from "../../assets/images/Strayer1.png";
import Verizon from "../../assets/images/verizon1.png";

function ShowMoreSA() {
  const [open, setOpen] = useState(false);
  // const initialText = 'Show More'
  // const [buttonText, setButtonText] = useState(initialText);

  // function handleClick() {
  //   setButtonText('Show Less');
  // }
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Button
        variant="link p-0"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="show-more-text"
        aria-expanded={open}
      >
        <div>
          {/* <button onClick={handleClick}>{buttonText}</button> */}
          <button className="btn-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Recipient of the 2021 Operations Trailblazer Award for individual
              contributions that directly influenced enterprise-wide change in
              business intel tools.
            </li>
            <li>
              Efforts credited with having significantly improved stakeholder
              buy-in and utilization of refreshed reporting interfaces, which
              delivered downstream improvement in data integrity and leader
              efficiencies.
            </li>
            <li>
              New dashboards made data more consumable with interactive
              visualizations of KPIs as related to the overall impacts of
              absenteeism on the business, its financials, shrink, and other
              strategic priorities.
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreCoord() {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Button
        variant="link p-0"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="show-more-text"
        aria-expanded={open}
      >
        <div>
          <button className="btn-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Interfaced closely with partners in HR, business leaders and
              vendors to ensure smooth administration of absenteeism, timesheet
              auditing, and leave management.
            </li>
            <li>
              Member of a small team whose efforts were credited with having
              saved tens of millions of dollars annually through timesheet
              auditing and limiting legal exposure through careful attention and
              application of HR guidelines, and protections guaranteed by law,
              for the domestic customer service, technical support and social
              media workgroups accounting for over 11,000 employees.
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreAnalyst() {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Button
        variant="link p-0"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-controls="show-more-text"
        aria-expanded={open}
      >
        <div>
          <button className="btn-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Successfully launched the new gamification platform onsite for the
              Wilmington, NC call center that was home to 1,200 corporate
              employees, and eventually took on the Charleston, SC call center
              and supported an additional 1,000 employees in a remote capacity.
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function Resume() {
  return (
    <div className="mx-3 pb-2">
      <h1>
        Resume{" "}
        <a href={bnkCv} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-download pdf"></i>
        </a>
      </h1>

      <div>
        <a href="#EXPERIENCE">EXPERIENCE</a> &nbsp;| &nbsp;
        <a href="#TECHNICAL SKILLS">TECHNICAL SKILLS</a> &nbsp;| &nbsp;
        <a href="#EDUCATION">EDUCATION</a> &nbsp;| &nbsp;
        <a href="#DEVELOPMENT">DEVELOPMENT</a> &nbsp;| &nbsp;
        <a href="#INDUSTRY INTERESTS">INDUSTRY INTERESTS</a>
      </div>

      <div className="resume">
        <br></br>
        <strong className="resume-header" id="EXPERIENCE">
          EXPERIENCE
        </strong>
        <br></br>
        <div className="indent-resume">
          <img
            src={Verizon}
            width="77px"
            height="17px"
            className="d-inline-block mb-1"
            alt="Verizon Logo"
          />
          <br></br>
          <strong>Sr. Analyst, HQ Operations, </strong>
          <em>2020 - 2022.</em>
          <br></br>
          Primarily responsible for any and all reporting with regard to
          absenteeism and leave-related data for a Sr. Manager, Director, and
          Vice President audience for the entire U.S.-based Customer Service,
          Tech and Specialty work groups.
          <ShowMoreSA />
          <br></br>
          <br></br>
          <strong>Coordinator, HQ Operations, </strong>
          <em>2016 - 2020.</em>
          <br></br>
          Operated at the leading edge of a risk management team, partnered with
          call center business leaders, operations, and HR to ensure accurate
          time-keeping practices, leave-of-absence (LOA) claim reporting to
          vendors and adherence to headquarters HR corporate guidelines and
          compliance with Federal and State laws.
          <ShowMoreCoord />
          <br></br>
          <br></br>
          <strong>Analyst, Field Operations, </strong>
          <em>2014 - 2016.</em>
          <br></br>
          Served as the project administrator on a small specialized team that
          prioritized the implementation of a digital platform that promoted
          ideal behaviors as identified or aligned with the business objectives
          of the contact center call-taking population.
          <ShowMoreAnalyst />
          <br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="TECHNICAL SKILLS">
          TECHNICAL SKILLS
        </strong>
        <br></br>
        <div className="indent-resume">
          <strong>Languages:</strong> HTML{" "}
          <i className="fa-brands fa-html5"></i>, CSS{" "}
          <i className="fa-brands fa-css3-alt"></i>, JavaScript{" "}
          <i className="fa-brands fa-square-js"></i>, Python3{" "}
          <i className="fa-brands fa-python"></i> (<em>In Progress</em>), SQL.
          <br></br>
          <br></br>
          <strong>Concepts:</strong> Responsive Design, Big O Notation, TDD,
          Agile Development, Data Structures, Security & Session Storage, Local
          Storage, User Authentication and Database Management.
          <br></br>
          <br></br>
          <strong>Tools:</strong> Bootstrap{" "}
          <i className="fa-brands fa-bootstrap"></i>, Bulma, Materialize,
          Handlebars, Font Awesome <i className="fa-solid fa-font-awesome"></i>,
          MongoDB <i className="fa-brands fa-mdb"></i>, Express.js, React.js{" "}
          <i className="fa-brands fa-react"></i>, Node.js{" "}
          <i className="fa-brands fa-node-js"></i>, React Router, Apollo
          GraphQL, Heroku, Inquirer CLI, Terminal{" "}
          <i className="fa-solid fa-terminal"></i>, JSON, JWT, Insomnia, Git{" "}
          <i className="fa-brands fa-git"></i>, GitHub{" "}
          <i className="fa-brands fa-square-github"></i>, GitHub Gists, Google
          Data Studio, Power BI, MySQL, NoSQL, NPM{" "}
          <i className="fa-brands fa-npm"></i>, VS Code, Google Suite{" "}
          <i className="fa-brands fa-google"></i>, Microsoft Office{" "}
          <i className="fa-brands fa-microsoft"></i>, Apple IOS{" "}
          <i className="fa-brands fa-apple"></i>.<br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="EDUCATION">
          EDUCATION
        </strong>
        <br></br>
        <div className="indent-resume">
          <img
            src={UNC1}
            width="118px"
            height="32px"
            className="d-inline-block mb-1"
            alt="UNC Logo"
          />
          <br></br>
          <em>Certificate, Coding Boot Camp, 2022.</em> <br></br>
          Intensive 24-week coding boot camp curriculum that qualifies and
          prepares graduates for transition into full stack web developer roles.
          <br></br> <br></br>
          <img
            src={Strayer}
            width="118px"
            height="25px"
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
            width="118px"
            height="32px"
            className="d-inline-block mb-1"
            alt="UNC Logo"
          />
          <br></br>
          <em>Bachelor of Arts, B.A. Anthropology, 2008.</em>
          <br></br>
          Forensic Science minor. Lambda Alpha Honors Society Lifetime Member.
          <br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="DEVELOPMENT">
          DEVELOPMENT
        </strong>
        <br></br>
        <div className="indent-resume">
          Verizon Scrum Master Badge <br></br>
          Verizon Agile Mindset Program Badge <br></br>
          Verizon Lean Six Sigma (VLSS) <br></br>
          Verizon Project & Management Fundamentals <br></br>
          Udemy.com – JavaScript Algorithms & Data Structures Masterclass (
          <em>In Progress</em>)<br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="INDUSTRY INTERESTS">
          INDUSTRY INTERESTS
        </strong>
        <br></br>
        <div className="indent-resume">
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
        </div>
      </div>
      <br></br>
      <br></br>
      <a
        href="https://www.credly.com/badges/a2526be3-fc55-45e8-8c4b-db81fb685808/linked_in?t=rm9jm1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="badge1" src={codeBadge1} alt="UNC Boot Camp Badge" />
      </a>
      <br></br>
      <br></br>
    </div>
  );
}

export default Resume;
