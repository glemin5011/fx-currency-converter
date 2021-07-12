import React from "react";
import Converter from "./Converter";
import CurrencyTables from "./CurrencyTables";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container my-2 py-2">
          <div className="row">
            <div className="col mx-auto">
              <h1 className="text-center mt-2">
                Get accurate currency exchange rates fast.
              </h1>
            </div>
          </div>
          <Converter />
        </div>
        <div className="container py-2 my-2">
          <div className="row">
            <div className="col mx-auto">
              <h1 className="text-center mt-4 pt-4">
                Daily coverage of 33 currencies
              </h1>
            </div>
            <CurrencyTables />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
