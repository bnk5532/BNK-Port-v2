import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import profilePic from "../../assets/images/Profile BNK.jpeg";
// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function NavBar(props) {
  console.log(props)

  // const { categories = [], setCurrentCategory, currentCategory } = props;
  // const {
  //               categories,
  //               setCurrentCategory,
  //               contactSelected,
  //               currentCategory,
  //               setContactSelected,
  //             } = props;

  //             useEffect(() => {
  //                       document.title = capitalizeFirstLetter(currentCategory.name);
  //                     }, [currentCategory]);

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);
  // return (
  //   <nav>
  //      <ul className="flex-row">
  //       {categories.map((page) => (
  //         <li>
  //           <span onCLick(() => setCurrentCategory(()) </span>
  //         </li>
  //       ))
  //       }
  //      </ul>    
  //   </nav>
  // )
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={profilePic}
              width="30"
              height="30"
              className="d-inline-block rounded"
            />
            {" Brian Nicholas King | Portfolio"}
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link
              href="https://docs.google.com/document/d/1cNJy2KfW0pixaHIydPSxX9GEukWn0pEyi6GbB72EOp8/edit#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link
              href="https://github.com/bnk5532"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github is-size-5" aria-hidden="true"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
