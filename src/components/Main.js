import React from "react";

import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Property from "./Property"
import Contact from "./Contact"
import Footer from "./Footer"

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Property />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
