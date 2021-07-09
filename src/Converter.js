import React from "react";
import usa from "./country-logos/usa.png";
import eu from "./country-logos/eu.png";

class Converter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container my-4 row-wrapper">
          <div className="row">
            <div className="col-6 col-xl-4 mx-auto mt-4 text-center">
              <img
                src={usa}
                className="currency-converter-icon d-inline border border-dark"
              ></img>
              <h2 className="d-inline-block align-middle ml-2">USD</h2>
            </div>
            <div className="col-6 col-xl-4 mx-auto mt-4 text-center">
              <img
                src={eu}
                className="currency-converter-icon d-inline border border-dark"
              ></img>
              <h2 className="d-inline-block align-middle ml-2 text-center">
                EUR
              </h2>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4 mx-auto my-2 text-center">
              <button type="button" className="btn btn-primary btn-xl-lg">
                Swap
              </button>
            </div>
          </div>
          <div className="row text-center">
            <div className="col text-center">
              <input
                className="form-control form-control-lg my-2"
                type="number"
                placeholder="$1.00"
              />
            </div>
            <div className="col text-center">
              <input
                className="form-control form-control-lg my-2"
                type="number"
                placeholder="EUR 0.84"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
