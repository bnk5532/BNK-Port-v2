// import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
// import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import wbHero from "./assets/images/WB2.png";
// import Page from "./components/Page";

function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  const changeSelected = (newCategory)=>{
    setCurrentCategory(newCategory)
  }
  const renderPage = () => {
            switch(currentCategory){
                case "Portfolio":
                    return <Project />
                case "Contact":
                    return <ContactForm />
                default:
                    return <About />
            }
        }
    
  return (
    <div className="App">
      <header>
        {/* <Header></Header> */}
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
