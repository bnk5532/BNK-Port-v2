import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Navigation";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
// import NavBar from "./components/Navigation";
import Project from "./components/Project";


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
      
      <main className="p-3">
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
