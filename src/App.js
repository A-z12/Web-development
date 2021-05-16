import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
