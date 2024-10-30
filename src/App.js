// import { AppRoutes } from "./Routes";
import "./App.css";

import React, { useState } from "react";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Recommendations from "./components/Recommendations";
import Interests from "./components/Interests";
import wbHero from "./assets/images/WB2.png";
import Photography from "./components/Photography";

// import {Routes} from "./Routes";
// import {Route} from "react-router";


// // import NavBar from "./components/Navigation";


// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { BrowserRouter } from "react-router-dom";



function App() {
  const [currentCategory, setCurrentCategory] = useState("About");
  const changeSelected = (newCategory) => {
    setCurrentCategory(newCategory);
  };
  const renderPage = () => {
    switch (currentCategory) {
      case "Portfolio":
        return <Project />;
      case "Resume":
        return <Resume />;
      case "Recommendations":
        return <Recommendations />;
      case "Interests":
        return <Interests />;
        case "Photography":
        return <Photography />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
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
            <img className="w-100 w-beach" src={wbHero} alt="Wrightsville Beach, NC" />
          </div>
        </div>
       {/* <Route />
       <Routes /> */}
        {renderPage()}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
