import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
