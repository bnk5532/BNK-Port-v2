// import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
// import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
// import About from "./components/About";
import Project from "./components/Project";
import wbHero from "./assets/images/WB2.png";
// import Page from "./components/Page";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const changeSelected = ()=>{
    setContactSelected(!contactSelected)
  }
  return (
    <div className="App">
      <header>
        {/* <Header></Header> */}
        <Nav
          contactSelected={contactSelected}
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
