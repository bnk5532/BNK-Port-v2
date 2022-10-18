import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
// import About from "./components/About";
import Project from "./components/Project";
import wbHero from "./assets/images/WB2.png";


function App() {
  const [categories] = useState([
    { name: "About me", description: "About n/a" },
    { name: "Projects", description: "Project n/a" },
    { name: "Resume", description: "Resume n/a" },
    { name: "Contact", description: "Contact n/a" },
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
        <div className="wrapper w-100">
          <div className="pb-2">
            {" "}
            <img className="w-100" src={wbHero} alt="Wrightsville Beach, NC" />
          </div>
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
