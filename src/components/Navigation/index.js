import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Harp from "../../assets/images/harp2.png";

function NavBar({changeSelected }) {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
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
            <div className="cursor">{"Brian Nicholas King"} &nbsp;|&nbsp; {"Portfolio"}</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link eventKey="1" onClick={() => changeSelected("About")}>
                About
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                onClick={() => changeSelected("Portfolio")}
              >
                Projects
              </Nav.Link>
              <Nav.Link eventKey="3" onClick={() => changeSelected("Resume")}>
                Resume
              </Nav.Link>
              <Nav.Link
                eventKey="4"
                onClick={() => changeSelected("Recommendations")}
              >
                Recommendations
              </Nav.Link>
              <Nav.Link
                eventKey="5"
                onClick={() => changeSelected("Interests")}
              >
                Interests
              </Nav.Link>
              {/* <Nav.Link onClick={() => changeSelected("Contact")}>
        Contact
      </Nav.Link> */}

              <Nav.Link
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
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
