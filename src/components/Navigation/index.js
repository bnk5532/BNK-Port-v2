// import React, {useState} from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
import Harp from "../../assets/images/harp2.png";

// function NavBar({ changeSelected }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const renderTooltip = (text) => (props) =>
//     (
//       <Tooltip id="button-tooltip" {...props}>
//         {text}
//       </Tooltip>
//     );

//     const handleToggle = () => {
//       setIsOpen(!isOpen);
//     };

//     const handleItemClick = (item) => {
//       changeSelected(item);
//       setIsOpen(false); // Close the menu on item selection
//     };
//   return (
//     <>
//       <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand>
//             <img
//               src={Harp}
//               width="30"
//               height="30"
//               className="d-inline-block align-top cursor"
//               alt="Boru Harp"

//             />
//             &nbsp;&nbsp;{"Brian Nicholas King"}{" "}
//             <span id="header1">&nbsp;|&nbsp; {"Portfolio"}</span>
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={handleToggle}
//             className="custom-toggle"
//           >
//             {isOpen ? (
//               // "X" icon when menu is expanded
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             ) : (
//               // Hamburger icon when menu is collapsed
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="1.5"
//                 viewBox="0 0 24 24"
//               >
//                 <line x1="3" y1="6" x2="21" y2="6"></line>
//                 <line x1="3" y1="12" x2="21" y2="12"></line>
//                 <line x1="3" y1="18" x2="21" y2="18"></line>
//               </svg>
//             )}
//           </Navbar.Toggle>
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className={isOpen ? "me-auto" : "ms-auto"}>
//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("About Me")}
//               >
//                 <Nav.Link eventKey="1" onClick={() => handleItemClick("About")}>
//                   <i className="fa-solid fa-circle-user">
//                     <span id="sm-menu">&nbsp; About Me</span>{" "}
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>

//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("Projects")}
//               >
//                 <Nav.Link
//                   eventKey="2"
//                   onClick={() => handleItemClick("Portfolio")}
//                 >
//                   <i className="fa-solid fa-square-poll-vertical">
//                     <span id="sm-menu">&nbsp; Projects</span>
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>

//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("My Resume")}
//               >
//                 <Nav.Link eventKey="3" onClick={() => handleItemClick("Resume")}>
//                   <i className="fa-solid fa-address-card">
//                     <span id="sm-menu">&nbsp; Resume</span>
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>

//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("Interests")}
//               >
//                 <Nav.Link
//                   eventKey="4"
//                   onClick={() => handleItemClick("Interests")}
//                 >
//                   <i className="fa-solid fa-icons">
//                     <span id="sm-menu">&nbsp; Interests</span>
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>
//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("Photography")}
//               >
//                 <Nav.Link
//                   eventKey="5"
//                   onClick={() => handleItemClick("Photography")}
//                 >
//                   <i className="fa-solid fa-camera">
//                     <span id="sm-menu">&nbsp; Photography</span>
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>

//               <OverlayTrigger
//                 placement="bottom"
//                 overlay={renderTooltip("Recommendations")}
//               >
//                 <Nav.Link
//                   eventKey="6"
//                   onClick={() => handleItemClick("Recommendations")}
//                 >
//                   <i className="fa-solid fa-heart-circle-plus">
//                     <span id="sm-menu">&nbsp; Recommendations</span>
//                   </i>
//                 </Nav.Link>
//               </OverlayTrigger>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// import React from "react";
// import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function NavBar(changeSelected) {
  // const [isOpen, setIsOpen] = useState(false);

  // const renderTooltip = (text) => (props) =>
  //   (
  //     <Tooltip id="button-tooltip" {...props}>
  //       {text}
  //     </Tooltip>
  //   );

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleItemClick = (item) => {
  //   changeSelected(item);
  //   setIsOpen(false); // Close the menu on item selection
  // };


  // const navigate = useNavigate();

  // const handleNavigation = (path) => {
  //   navigate(path);
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          bg="dark"
          variant="dark"
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Brand>
              <img
                src={Harp}
                width="30"
                height="30"
                className="d-inline-block align-top cursor"
                alt="Boru Harp"
              />
              &nbsp;&nbsp;{"Brian Nicholas King"}{" "}
              <span id="header1">&nbsp;|&nbsp; {"Portfolio"}</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark text-white"
            >
              <Offcanvas.Header closeButton className="btn-close-white">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
             
             
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <Nav.Link onClick={() => handleNavigation("/")} className="text-white">
                <i className="fa-solid fa-circle-user"></i>
                <span>&nbsp; Home</span>
                </Nav.Link> */}
                  <Nav.Link
                    eventKey="1"
                    onClick={() => changeSelected("About")}
                    className="text-white" 
                  >
                    <i className="fa-solid fa-circle-user"></i>
                    <span> &nbsp; About Me</span>{" "}
                  </Nav.Link>

                  <Nav.Link
                    eventKey="2"
                    onClick={() => changeSelected("About")}
                    className="text-white" // Set text color for links
                  >
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    <span> &nbsp; Projects</span>{" "}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="3"
                    onClick={() => changeSelected("Resume")}
                    className="text-white" // Set text color for links
                  >
                    <i className="fa-solid fa-address-card"></i>
                    <span> &nbsp; Resume</span>{" "}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="4"
                    onClick={() => changeSelected("Interests")}
                    className="text-white" // Set text color for links
                  >
                    <i className="fa-solid fa-icons"></i>
                    <span> &nbsp; Interests</span>{" "}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="5"
                    onClick={() => changeSelected("Photography")}
                    className="text-white" // Set text color for links
                  >
                    <i className="fa-solid fa-camera"></i>
                    <span> &nbsp; Photography</span>{" "}
                  </Nav.Link>
                  <Nav.Link
                    eventKey="6"
                    onClick={() => changeSelected("Recommendations")}
                    className="text-white" // Set text color for links
                  >
                    <i className="fa-solid fa-heart-circle-plus"></i>
                    <span> &nbsp; Recommendations</span>{" "}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;

