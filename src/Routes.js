import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Interests } from "./pages/Interests";
import { Photography } from "./pages/Photography";
// import { NoPage } from "./pages/NoPage";

export const AppRoutes = () => {
  return (
<Router>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/photography" element={<Photography />} />
      {/* <Route path="/recommendations" element={<Recommendations />} /> */}
      {/* You can add a wildcard route or redirect here if necessary */}
    </Routes>
    </Router>
    // <>
    //   <Router>
    //     <Routes>
    //       <Route Index element={<About />} />

    //       <Route path="/projects">
    //         <Projects />
    //       </Route>

    //       <Route path="/resume">
    //         <Resume />
    //       </Route>

    //       <Route path="/interests">
    //         <Interests />
    //       </Route>

    //       <Route path="/photography">
    //         <Photography />
    //       </Route>

    //       <Route path="/*">
    //         <NoPage />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </>
  );
};

export default AppRoutes;
