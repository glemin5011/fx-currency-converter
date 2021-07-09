import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Navbar";
import Home from "./Home.js";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
