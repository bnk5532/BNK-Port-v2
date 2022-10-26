import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import wbHero from "./assets/images/WB2.png";

function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  const changeSelected = (newCategory) => {
    setCurrentCategory(newCategory);
  };
  const renderPage = () => {
    switch (currentCategory) {
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App container-fluid">
      <header>
        <Nav
          currentCategory={currentCategory}
          changeSelected={changeSelected}
        ></Nav>
      </header>

      <main>
        <div className="wrapper w-100">
          <div className="pb-2">
            {" "}
            <img className="w-100" src={wbHero} alt="Wrightsville Beach, NC" />
          </div>
        </div>

        {renderPage()}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default App;
