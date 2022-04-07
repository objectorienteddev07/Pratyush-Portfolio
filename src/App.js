import React from "react";
import { About, Header, Footer, Testimonial, Skills, Work } from "./container";
import { Navbar } from "./components";

// Css
import "./styles/App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
