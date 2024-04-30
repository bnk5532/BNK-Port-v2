// import React from "react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import bnkCv from "../../assets/pdf/BNKCV2024v1.2.pdf";
import bnkCl from "../../assets/pdf/BNKGenCL2023v3.pdf";
import grades from "../../assets/pdf/BootCampGrades.pdf";
import codeBadge1 from "../../assets/images/codeBadge1.png";
import UNC1 from "../../assets/images/UNC1.png";
import UNCW from "../../assets/images/uncw3.png";
import Strayer from "../../assets/images/Strayer1.png";
// import Verizon from "../../assets/images/verizon1.png";

function ShowMoreBDC() {
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
            {showMore ? "Show Less ^" : "Show More +"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Contributions:</strong>
          <ul>
            <strong>Autocomplete Legal Document Generator Script</strong>
            <div className="indent-resume">
              <li>
                Developed a new automated process that is capable of completing
                one or several legal documents with a single click submission of
                an online form that is provided by the client.
              </li>
              <li>
                The fully automated document generator completes in seconds
                (~3.5 seconds/document) and replaces a manual process that would
                otherwise take 1-2+ hours of fact finding interviews and manual
                input per document by the attorney/paralegal, which saves the
                practice hundreds of dollars for each transaction in actual
                costs as well as those costs associated with lost economic
                opportunity.
                <a
                  href={
                    "https://watch.screencastify.com/v/A0ZdALXkasGM0MDwpWhq"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-more" type="button">
                    Click for Demo!
                  </button>
                </a>
              </li>
              <li>
                Unlimited use case potential for this script which is low
                maintenance, error-free, customizable, and zero-cost to the user
                after the initial setup costs. Essentially, any document can be
                adapted to this process regardless of business scope or sector.
              </li>
            </div>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

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
            {showMore ? "Show Less ^" : "Show More +"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Designed the website landing page for the migration of all new
              dashboards, supplemental reporting, tools, resources and training
              materials for the LOA team and its internal customers.
            </li>
            <li>
              Built new dashboards that made data more consumable with
              interactive visualizations of KPIs as related to the overall
              impacts of absenteeism on the business, its financials, shrink,
              and other strategic priorities.
            </li>
            <li>
              Credited with having an enterprise-wide impact in stakeholder
              buy-in and utilization of the refreshed reporting interfaces that
              delivered downstream improvements in data integrity, storytelling,
              leader efficiencies, and ultimately led to the winning of the
              highly coveted 2021 Operations Trailblazer award.
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
            {showMore ? "Show Less ^" : "Show More +"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Contributor on a small team whose collective efforts were credited
              with having saved nearly $20 million annually through persistent
              time sheet auditing, absenteeism management, and daily leader
              engagement.
            </li>
            <li>
              Reduced legal exposure through consultation, process improvement,
              leader education and the careful application of HR guidelines and
              those protections guaranteed by law for 12,000+ employees.
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
            {showMore ? "Show Less ^" : "Show More +"}{" "}
            {/* <i className="fa-solid fa-angle-right"></i> */}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <strong>Key Accomplishments:</strong>
          <ul>
            <li>
              Successfully launched the new platform at the Wilmington, NC call
              center that served 1,200 corporate employees and shortly following
              the successful launch, assumed full administration of the
              Charleston, SC platform and remotely supported an additional 1,000
              employees.
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreCert() {
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
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Close Overview" : "Overview"}
          </button>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="show-more-text">
          <p>
            A 24-week intensive program focused on gaining technical programming
            skills in front-end and back-end technologies including HTML, CSS,
            JavaScript, jQuery, Bootstrap, React.js. Node.js, Express.js,
            Database Theory, MySQL, NoSQL (MongoDB), Command Line, and Git.
            Between live instructional time, asynchronous material, group
            projects, and individual assignments, learners spend 450+ hours on
            program content.
            <a
              href={
                "https://bootcamp.unc.edu/coding/landing-full/?utm_source=university-badge&utm_campaign=unc-referral-fsf"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-more" type="button">
                Program Website
              </button>
            </a>
          </p>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreGradCourses() {
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
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Close Courses" : "Courses"}
          </button>
        </div>
      </Button>

      <Collapse in={open}>
        <div id="show-more-text">
          <ul>
            {" "}
            <strong>MBA Core Courses:</strong>
            <li>The Business Enterprise (BUS 508)</li>
            <li>Strategic Management (BUS 599)</li>
            <li>Statistics (MAT 300)</li>
            <li>Quantitative Methods (MAT 540)</li>
            <li>Marketing Management (MKT 500)</li>
            <li>Management Economics & Globalization (ECO 550)</li>
            <li>Leadership & Organizational (BUS 520)</li>
            <li>Law, Ethics & Corporate Governance (LEG 500)</li>
            <li>
              Financial Management (FIN 534)
              <li>
                <li>Financial Accounting (ACC 557)</li>
                <br></br>
                <strong>Acquisitions Concentration Courses:</strong>
                <li>Government Contract Law (LEG 505)</li>
                <li>Government Acquisition (BUS 501)</li>
                <li>Business Strategies & Proposals (BUS 505)</li>
              </li>
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreUndergradCourses() {
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
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Close Courses" : "Courses"}
          </button>
        </div>
      </Button>

      <Collapse in={open}>
        <div id="show-more-text">
          <ul>
            {" "}
            <strong>Anthropology Major Courses:</strong>
            <li>Cultural Anthropology (ANT 206)</li>
            <li>Archaeology (ANT 207)</li>
            <li>Archaeology Lab (ANTL 207)</li>
            <li>Physical Anthropology (ANT 210)</li>
            <li>Forensic Anthropology (ANT 211)</li>
            <li>Collapse (ANT 292)</li>
            <li>Anthropology of Gender (ANT 303)</li>
            <li>Old World Archaeology (ANT 308)</li>
            <li>Environmental Anthropology (ANT 309)</li>
            <li>Field Methods Archaeology (ANT 311) </li>
            <li>Human Origins (ANT 320)</li>
            <li>Human Osteology (ANT 326)</li>
            <li>Human Osteology Lab (ANTL 326)</li>
            <li>Human Biological Variation (ANT 324)</li>
            <li>Historical Anthropological Theory (ANT 450)</li>
            <li>Directed Independent Study (ANT 491)</li>
            <br></br>
            <strong>Core Undergraduate Courses:</strong>
            <li> Ancient Through Medieval (ARH 201)</li>
            <li>Humans & Ecology (BIO 150)</li>
            <li>Genetics In Human Affairs (BIO 160)</li>
            <li>Principles of Biology: Cells (BIO 204)</li>
            <li>Genetics (BIO 335)</li>
            <li>General Chemistry (CHM 101)</li>
            <li>Classical Literature In Translation (CLA 209)</li>
            <li>Monuments & Sites of Ancient Rome (CLA 292)</li>
            <li>Criminal Justice (CRJ 105)</li>
            <li>Computing & Applications (CSC 105)</li>
            <li>Victimology (CRM 315)</li>
            <li>College Writing & Reading I (ENG 101)</li>
            <li>College Writing & Reading II (ENG 201)</li>
            <li>Environmental Studies (EVS 195)</li>
            <li>Human Geography (GGY 140)</li>
            <li>Environmental Geology (GLY 120)</li>
            <li>Natural Disasters (GLY 125)</li>
            <li>Prehistoric Life (GLY 135)</li>
            <li>Oceanography (GLY 150)</li>
            <li>U.S. To 1865 (HST 201)</li>
            <li>General College Math (MAT 101)</li>
            <li>Latin I (LAT 101)</li>
            <li>Philosophy of Human Nature (PAR 211)</li>
            <li>Religion (PAR 103)</li>
            <li>Foundations of Physical Activity (PED 101)</li>
            <li>Scuba (PED 104)</li>
            <li>Golf (PED 113)</li>
            <li>Sociology (SOC 105)</li>
            <li>Freshman Seminar (UNI 101)</li>
            <br></br>
            <strong>129 Credit Hours Earned</strong>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowMoreUngradExtra() {
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
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Close Extracirricular" : "Extracirricular"}
          </button>
        </div>
      </Button>

      <Collapse in={open}>
        <div id="show-more-text">
          <ul>
            {" "}
            <li>Lambda Alpha Honors Society Lifetime Member.</li>
            <li>James C. Sabella Academic Scholarship Award Recipient.</li>
            <li>NAUI Scuba Diving Course. 2008.</li>
            <li>Spring Break Study Abroad, Rome, Italy. 2007.</li>
            <li>Summer Field School Cahokia Mounds, Collinsville, IL. 2006.</li>
            <li>
              Biological Anthropology Laboratory Assistant on Hypoxia Gene
              Project.
            </li>
          </ul>
        </div>
      </Collapse>
    </>
  );
}

function ShowGradGPA() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Button variant="btn-gpa p-0">
        <div>
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "GPA 3.917" : "GPA"}
          </button>
        </div>
      </Button>
    </>
  );
}

function ShowUngradGPA() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Button variant="btn-gpa p-0">
        <div>
          <button className="btn-gpa" onClick={() => setShowMore(!showMore)}>
            {showMore ? "GPA 3.4137" : "GPA"}
          </button>
        </div>
      </Button>
    </>
  );
}

function Grades() {
  return (
    <>
      <Button variant="btn-gpa p-0">
        <div>
          <a href={grades} target="_blank" rel="noopener noreferrer">
            <button className="btn-gpa" type="button">
              Grades
            </button>
          </a>
        </div>
      </Button>
    </>
  );
}

function Resume() {
  return (
    <div className="mx-3 pb-2">
      <div className="resume-title">
        <a href="#EXPERIENCE">EXPERIENCE</a> &nbsp;| &nbsp;
        <a href="#EDUCATION">EDUCATION</a> &nbsp;| &nbsp;
        <a href="#DEVELOPMENT">DEVELOPMENT</a> &nbsp;| &nbsp;
        <a href="#TECHNICAL SKILLS">TECHNICAL SKILLS</a> &nbsp;| &nbsp;
        <a href="#INDUSTRY INTERESTS">INDUSTRY INTERESTS</a>
      </div>

      <h2>
        Resume{" "}
        <a href={bnkCv} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-download pdf"></i>
        </a>
      </h2>

      <div className="resume">
        <br></br>
        <strong className="resume-header" id="EXPERIENCE">
          EXPERIENCE
        </strong>
        <br></br>
        <div className="indent-resume">
          {/* <img
            src={Verizon}
            width="95px"
            height="21px"
            className="d-inline-block mb-1"
            alt="Verizon Logo"
          /> */}
          {/* <br></br>
          <strong>Owner & PIC, Cape Fear UAV, LLC, </strong>
          <em>2023 - Present.</em>
          <br></br> */}
          <strong>
            Business Development Consultant, Port City Attorney, Brandon C.
            Pettijohn, Attorney at Law, PLLC,{" "}
          </strong>
          <em>2022 - Present.</em>
          <br></br>
          Closely involved in the refinement of the firm's business strategy,
          growth and efficiencies while also improving upon marketing efforts,
          office management, communications, networking, revenue generation and
          solicitation of legal services, especially with regard to veteran
          outreach potential involving the Camp Lejeune Justice Act of 2022.
          Consults regularly on matters involving outside business affairs and
          government acquisitions.
          <ShowMoreBDC />
          <br></br>
          <br></br>
          <strong>Sr. Analyst, HQ Operations, Verizon, </strong>
          <em>2020 - 2022.</em>
          <br></br>
          Responsible for any and all reporting requirements with regard to
          absenteeism, time/attendance (TA) and leave-of-absence (LOA) data for
          a senior business leader, HRBP and executive level audience for the
          entire domestic Customer Service, Tech and Specialty work groups for
          the wireless organization.
          <ShowMoreSA />
          <br></br>
          <br></br>
          <strong>Coordinator, HQ Operations, Verizon, </strong>
          <em>2017 - 2020.</em>
          <br></br>
          Operated at the leading edge of a risk management team, partnered with
          call center business leaders, operations, and HR to ensure accurate
          time/attendance practices, leave-of-absence management, reporting
          obligations, vendor relationships, and adherence to headquarters HR
          corporate guidelines and compliance with Federal and State laws.
          <ShowMoreCoord />
          <br></br>
          <br></br>
          <strong>Analyst, Field Operations, Verizon, </strong>
          <em>2016 - 2017.</em>
          <br></br>
          Subject-matter expert and project administrator for the implementation
          of a digital gamification platform that promoted ideal behaviors
          amongst the call-taking population as identified by business leaders
          and aligned with company KPIs, sales initiatives, shrink management,
          churn and other strategic objectives.
          <ShowMoreAnalyst />
          <br></br>
          <br></br>
          <strong>Contact Center, CS & Tech (various), Verizon, </strong>
          <em>2009 - 2016.</em>
          <br></br>
          <ul>
            <li>Technical Support Expert (Advanced / Tier 2)</li>
            <li>Technical Support Coordinator (Tier 1)</li>
            <li>CS PRO (High Value Accounts & Churn Prevention)</li>
            <li>Sr. CSR w/Customer Relations Team (Escalations)</li>
            <li>Customer Service Representative (CSR)</li>
          </ul>
          <a
            href={"https://www.linkedin.com/in/bnk5532/details/experience/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            For more experience details, <em>click here!</em>
          </a>
          <br></br>
          <br></br>
        </div>

        <strong className="resume-header" id="EDUCATION">
          EDUCATION
        </strong>
        <br></br>
        <div className="indent-resume">
          <img
            src={Strayer}
            width="160px"
            height="34px"
            className="d-inline-block mb-1 mt-2"
            alt="UNC Logo"
          />
          <br></br>
          <em>Master of Business Administration, M.B.A.</em> <br></br>
          Acquisitions, 2012.
          <br></br>
          Conferred with honors.
          <br></br>
          <ShowGradGPA />
          <ShowMoreGradCourses />
          <br></br>
          <br></br>
          <img
            src={UNCW}
            width="160px"
            height="44px"
            className="d-inline-block mb-1"
            alt="UNC Logo"
          />
          <br></br>
          <em>Bachelor of Arts, B.A.</em>
          <br></br>
          Anthropology, 2008.
          <br></br>
          Forensic Science minor.
          <br></br>
          <ShowUngradGPA />
          <ShowMoreUndergradCourses />
          <ShowMoreUngradExtra />
          <br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="DEVELOPMENT">
          PROFESSIONAL DEVELOPMENT
        </strong>
        <br></br>
        <div className="indent-resume">
          <img
            src={UNC1}
            width="160px"
            height="40px"
            className="d-inline-block mb-1 mt-2"
            alt="UNC Logo"
          />
          <br></br>
          <em>Certificate.</em>
          <a
            href="https://www.credly.com/badges/a2526be3-fc55-45e8-8c4b-db81fb685808/linked_in?t=rm9jm1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-more" type="button">
              &nbsp;
              <i className="fa-regular fa-circle-check"></i>&nbsp;Verify at
              Credly
            </button>
          </a>
          <br></br>
          Coding Full Stack Boot Camp, 2022.
          <br></br>
          <Grades />
          <ShowMoreCert />
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
          <i className="fa-brands fa-square-js"></i>, Apps Script{" "}
          <i className="fa-brands fa-google"></i>, Python3{" "}
          <i className="fa-brands fa-python"></i> (<em>In Progress</em>), SQL.
          <br></br>
          <br></br>
          <strong>Tools:</strong> Apple IOS, Apollo GraphQL, Android, Bootstrap,
          Bulma, ChatGPT, DJI sUAS, Git, GitHub, GitHub Gists, Google Data
          Studio (Looker), Google Workspace (G-Suite), Handlebars, Heroku,
          Inquirer CLI, Insomnia, JWT, Materialize, MERN stack (MongoDB,
          Express.js, React.js, Node.js), Microsoft Power BI, Microsoft Office,
          MySQL, NoSQL, NICE IEX, NPM packages, PeopleSoft, React Router,
          Screencastify, Terminal, Verint, VS Code and Windows. <br></br>
          <br></br>
        </div>

        <strong className="resume-header" id="TECHNICAL SKILLS">
          COURSEWORK
        </strong>
        <div className="indent-resume">
          Verizon Scrum Master Badge <br></br>
          Verizon Agile Mindset Program Badge <br></br>
          Verizon Lean Six Sigma (VLSS) <br></br>
          Verizon Project & Management Fundamentals <br></br>
          Udemy.com – JavaScript Algorithms & Data Structures Masterclass (
          <em>In Progress</em>)<br></br>
          Drone Pilot Ground School for FAA Part 107
          <br></br>
          <br></br>
        </div>

        <strong className="resume-header" id="INDUSTRY INTERESTS">
          INDUSTRY INTERESTS
        </strong>
        <br></br>
        <div className="indent-resume">
          Aerospace & Defense <i className="fa-solid fa-jet-fighter"></i>{" "}
          <br></br>
          Automation & Networking <i className="fa-solid fa-circle-nodes"></i>
          <br></br>
          Commercial Aviation <i className="fa-solid fa-plane-departure"></i>
          <br></br>
          FinTech <i className="fa-solid fa-coins"></i>
          <br></br>
          Government Acquisitions <i className="fa-solid fa-file-contract"></i>
          <br></br>
          HealthTech <i className="fa-solid fa-suitcase-medical"></i>
          <br></br>
          Legal & Contracts <i className="fa-solid fa-scale-balanced"></i>
          <br></br>
          Logistics & Supply Chain <i className="fa-solid fa-truck-fast"></i>
          <br></br>
          Strategy & Continuous Improvement{" "}
          <i className="fa-solid fa-chess"></i>
          <br></br>
          Travel Industry <i className="fa-solid fa-suitcase"></i>
          <br></br>
          Web Development & DevOps <i className="fa-solid fa-code"></i>
          <br></br>
          <br></br>
        </div>
        <strong className="resume-header" id="OTHER">
          OTHER
        </strong>
        <div className="indent-resume">
          <strong>Citizenship</strong>
          <br></br>
          🇺🇸 &nbsp; United States of America*
          <br></br>
          🇮🇪 &nbsp; Republic of Ireland, European Union*
          <br></br>
          <small>
            *Permitted to live, work, and travel without restriction, visa,
            invitation, or sponsorship in the above nations or unions.
          </small>
          <br></br>
          <br></br>
          <strong>FAQ</strong>
          <br></br>
          Travel: Yes, up to 25%
          <br></br>
          Relocation: No
          <br></br>
          Drivers License: Yes
          <br></br>
          Job Type: Full-Time
          <br></br>
          Experience Level: Associate / Consultant / Mid-Senior
        </div>
        <br></br>
        <strong className="resume-header" id="OTHER">
          DOWNLOADS
        </strong>
        <div className="indent-resume"></div>
        <a href={bnkCv} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-download pdf"></i>&nbsp;&nbsp;
          <strong>Resume/CV</strong>
          <br></br>
        </a>
        <a href={bnkCl} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-download pdf"></i>&nbsp;&nbsp;
          <strong>Cover Letter</strong>
        </a>
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
