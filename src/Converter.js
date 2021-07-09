import React from "react";
import usa from "./country-logos/usa.png";
import eu from "./country-logos/eu.png";

class Converter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row row-wrapper">
          <div className="col-6 col-xl-4 mx-auto my-4">
            <img
              src={usa}
              className="currency-converter-icon d-inline border"
            ></img>
            <h2 className="d-inline-block align-middle ml-2">USD</h2>
          </div>
          <div className="col-6 col-xl-4 mx-auto my-4">
            <img
              src={eu}
              className="currency-converter-icon d-inline border"
            ></img>
            <h2 className="d-inline-block align-middle ml-2 text-center">
              EUR
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
