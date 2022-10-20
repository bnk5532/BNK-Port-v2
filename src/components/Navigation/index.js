import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profilePic from "../../assets/images/Profile BNK.jpeg";

function NavBar({currentCategory, changeSelected}) {

  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => changeSelected("About") }>
            {" Brian Nicholas King | Portfolio"}
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link onClick={()=> changeSelected("About")}>About</Nav.Link>
            <Nav.Link onClick={()=> changeSelected("Portfolio")}>Portfolio</Nav.Link>
            <Nav.Link onClick={()=> changeSelected("Resume")}>Resume</Nav.Link>
            <Nav.Link onClick={()=> changeSelected("Contact")}>Contact</Nav.Link>
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

             <img
              alt=""
              src={profilePic}
              width="38"
              height="38"
              className="mx-4 d-inline-block rounded"
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
