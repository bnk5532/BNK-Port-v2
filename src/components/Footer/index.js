import React from "react";

function Footer() {
  return (
    <div className="pt-4">
      <div>
        <strong>Brian Nicholas King, Portfolio, 2022</strong>
        <br/> 1146 Spring Glen Ct. Leland, NC 28451 | 910-233-9775
        </div>

        <p>
        <a 
            href="mailto:bnk5532@gmail.com"
        >
            <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
        
        <a className="p-4"
          href="https://github.com/bnk5532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github is-size-5" aria-hidden="true"></i>
        </a>

       
        <a
            href="tel:+1-910-233-9775"
        >
            <i class="fa-solid fa-mobile-button" aria-hidden="true"></i>
        </a>
      
      </p>
    </div>
  );
}
export default Footer;
