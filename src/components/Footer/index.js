import React from "react";
import T2t from "../../assets/images/T2T-2.webp";
import Wwp from "../../assets/images/wwp1.png";
import USflag1 from "../../assets/images/USflag1.png";

function Footer() {
  return (
    <div className="p-3 foot-bg">
      <div className="footer-links">
        <p>
          <a className="p-3" href="mailto:bnk5532@gmail.com">
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          </a>

          <a
            className="p-3"
            href="https://github.com/bnk5532"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github is-size-5" aria-hidden="true"></i>
          </a>

          <a
            className="p-3"
            href="https://linkedin.com/in/bnk5532"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>

          <a
            className="p-3"
            href="https://youtube.com/user/briguy618"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
          </a>

          <a className="p-3" href="tel:+1-910-233-9775">
            <i className="fa-solid fa-mobile-button" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div className="footer">
        <strong>
          <span>&#169;</span>2022-2023 by Brian Nicholas King. All Rights
          Reserved.
        </strong>
        <br />
        <a href="mailto:bnk5532@gmail.com">bnk5532@gmail.com</a>
        <br /> Leland, North Carolina | USA
      </div>

      <div className="charity-title">
        <div>
          <img
            className="flag"
            src={USflag1}
            width="86px"
            height="45px"
            alt="US Flag"
          />
        </div>
        PROUD SUPPORTER OF:
      </div>
      <div className="charity">
        <a
          href="https://www.t2t.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-3"
            src={T2t}
            width="133px"
            height="52px"
            alt="T2T Foundation Logo"
          />
        </a>
        <a
          href="https://www.woundedwarriorproject.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="m-3"
            src={Wwp}
            width="140px"
            height="35px"
            alt="T2T Foundation Logo"
          />
        </a>
      </div>
    </div>
  );
}
export default Footer;
