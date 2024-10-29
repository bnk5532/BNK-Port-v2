import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Harp from "../../assets/images/harp2.png";

function NavBar({ changeSelected }) {
  const renderTooltip = (text) => (props) =>
    (
      <Tooltip id="button-tooltip" {...props}>
        {text}
      </Tooltip>
    );

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => changeSelected("About")}>
            <img
              src={Harp}
              width="30"
              height="30"
              className="d-inline-block align-top cursor"
              alt="Boru Harp"
            />
          </Navbar.Brand>
          <Navbar.Brand onClick={() => changeSelected("About")}>
            <div className="cursor">
              {"Brian Nicholas King"}{" "}
              <span id="header1">&nbsp;|&nbsp; {"Portfolio"}</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("About Me")}
              >
                <Nav.Link eventKey="1" onClick={() => changeSelected("About")}>
                  <i className="fa-solid fa-circle-user">
                    <span id="sm-menu">&nbsp;About Me</span>{" "}
                  </i>
                </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Projects")}
              >
                <Nav.Link
                  eventKey="2"
                  onClick={() => changeSelected("Portfolio")}
                >
                  <i className="fa-solid fa-briefcase">
                    <span id="sm-menu">&nbsp; Projects</span>
                  </i>
                </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("My Resume")}
              >
                <Nav.Link eventKey="3" onClick={() => changeSelected("Resume")}>
                  <i className="fa-solid fa-address-card">
                    <span id="sm-menu">&nbsp; Resume</span>
                  </i>
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Recommendations")}
              >
                <Nav.Link
                  eventKey="4"
                  onClick={() => changeSelected("Recommendations")}
                >
                  <i className="fa-solid fa-heart-circle-plus">
                    <span id="sm-menu">&nbsp; Recommendations</span>
                  </i>
                </Nav.Link>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Interests")}
              >
                <Nav.Link
                  eventKey="5"
                  onClick={() => changeSelected("Interests")}
                >
                  <i className="fa-solid fa-icons">
                    <span id="sm-menu">&nbsp; Interests</span>
                  </i>
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={renderTooltip("Photography")}
              >
                <Nav.Link
                  eventKey="6"
                  onClick={() => changeSelected("Photography")}
                >
                  <i className="fa-solid fa-camera">
                    <span id="sm-menu">&nbsp; Photography</span>
                  </i>
                </Nav.Link>
              </OverlayTrigger>
              {/* <Nav.Link onClick={() => changeSelected("Contact")}>
        Contact
      </Nav.Link> */}

              {/* <Nav.Link
                href="https://github.com/bnk5532"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github is-size-5" aria-hidden="true"></i>
              </Nav.Link>

              <Nav.Link
                href="https://linkedin.com/in/bnk5532"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </Nav.Link>

              <Nav.Link
                href="https://youtube.com/user/briguy618"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube" aria-hidden="true"></i> */}
              {/* </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
