import React from "react";
import Converter from "./Converter";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mx-auto">
            <h1 className="text-center mt-2">
              Get accurate currency exchange rates fast.
            </h1>
          </div>
        </div>
        <Converter />
      </div>
    );
  }
}

export default Home;
