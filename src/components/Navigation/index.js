// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

// function Nav(props) {
//     const {
//         categories = [],
//         setCurrentCategory,
//         contactSelected,
//         currentCategory,
//         setContactSelected,
//       } = props;

//       useEffect(() => {
//         document.title = capitalizeFirstLetter(currentCategory.name);
//       }, [currentCategory]);

//   return (
//     <nav>
//       <ul className="flex-row">
//         <li className="mx-2">
//           <a
//             data-testid="about"
//             href="#about"
//             onClick={() => setContactSelected(false)}
//           >
//             About me
//           </a>
//         </li>
//         <li className="mx-2">
//           <a
//             data-testid="Projects"
//             href="#projects"
//             onClick={() => setContactSelected(false)}
//           >
//             Projects
//           </a>
//         </li>
//         <li className="mx-2">
//           <a
//             data-testid="Resume"
//             href="https://docs.google.com/document/d/1cNJy2KfW0pixaHIydPSxX9GEukWn0pEyi6GbB72EOp8/edit#" target="_blank" rel="noopener noreferrer"
//             onClick={() => setContactSelected(false)}
//           >
//             Resume
//           </a>
//         </li>
//         <li className={`mx-2 ${contactSelected && "navActive"}`}>
//           <span onClick={() => setContactSelected(true)}>Contact</span>
//         </li>
        
//         {categories.map((category) => (
//           <li
//             className={`mx-1 ${
//               currentCategory.name === category.name &&
//               !contactSelected &&
//               "navActive"
//             }`}
//             key={category.name}
//           >
//             <span
//               onClick={() => {
//                 setCurrentCategory(category);
//                 setContactSelected(false);
//               }}
//             >
//               {capitalizeFirstLetter(category.name)}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Nav;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Brian Nicholas King | Portfolio </Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#resume">Resume</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from '../../utils/helpers';

function NavBar(props) {
    // const {
    //             categories = [],
    //             setCurrentCategory,
    //             contactSelected,
    //             currentCategory,
    //             setContactSelected,
    //           } = props;

    //           useEffect(() => {
    //                     document.title = capitalizeFirstLetter(currentCategory.name);
    //                   }, [currentCategory]);

    return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Brian Nicholas King | Portfolio</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1cNJy2KfW0pixaHIydPSxX9GEukWn0pEyi6GbB72EOp8/edit#" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/bnk5532" target="_blank" rel="noopener noreferrer"><i class="fa fa-github is-size-5"
              aria-hidden="true"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;