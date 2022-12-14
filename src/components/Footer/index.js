import React from "react";

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
      <div className="footer" >
        <strong>Brian Nicholas King, Portfolio, 2023.</strong>
        <br /> 1146 Spring Glen Ct. Leland, NC 28451 | 910-233-9775
      </div>
    </div>
  );
}
export default Footer;
