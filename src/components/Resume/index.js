import React from "react";
import bnkCv from "../../assets/pdf/BNKCV2022v2.pdf";

function Resume() {
  return (
    <div className="mx-3 pb-2">
      <h1>Resume</h1>

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
      </div>
      <br></br>
      <br></br>
      <a
        href={bnkCv}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-file-pdf"></i>
      </a>
    </div>
  );
}

export default Resume;
