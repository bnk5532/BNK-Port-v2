import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
// import NavBar from "./components/Navigation";
import Project from "./components/Project";
import wbHero from "./assets/images/WB2.png";
// import profilePic from "./assets/images/Profile BNK.jpeg";

function App() {

  const [categories] = useState([
    { name: 'About me', description: 'About n/a' },
    { name: 'Projects', description: 'Project n/a' },
    { name: 'Resume', description: 'Resume n/a' },
    { name: 'Contact', description: 'Contact n/a' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <header>
        <Header></Header>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </header>
      
      <main>

      <div className="hero pb-3"> <img className="w-100" src={wbHero} alt='Wrightsville Beach, NC'/>
      {/* <div className="p-6">
            <img
              class="profileImg rounded justify-content-left"
              src={profilePic}
              alt="BNK Profile"
            />
          </div> */}
          </div>
        {!contactSelected ? (
          <>
            {/* <About></About> */}
            <Project></Project>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      
      <footer>
        <Footer></Footer>
      </footer>
    
    </div>
  );
}





export default App;
