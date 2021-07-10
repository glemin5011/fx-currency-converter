import React from "react";
import USD from "./country-logos/usa.png";
import eu from "./country-logos/eu.png";
import { eventListeners } from "@popperjs/core";
import { json, checkStatus } from "./utils";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      leftCurrency: "USD",
      exchangeAmount: 0,
      rate: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.dropdownSelect = this.dropdownSelect.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  selectCurrency(event) {
    event.preventDefault();
  }

  fetchCurrencies() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ currencies: response });
      });
  }

  handleChange(event) {
    this.setState({ exchangeAmount: event.target.value });
  }

  dropdownSelect(event) {
    this.setState({ leftCurrency: event.target.value });
  }

  render() {
    const { currencies, leftCurrency } = this.state;
    const currencyCodes = Object.keys(currencies);
    const currencyNames = Object.values(currencies);

    return (
      <React.Fragment>
        <div className="container my-4 row-wrapper">
          <div className="row">
            <div className="col-6 col-xl-4 mx-auto mt-4 text-center">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={USD}
                  className="currency-converter-icon d-inline border border-dark"
                ></img>
                <h2 className="d-inline-block align-middle ml-4">
                  {leftCurrency}
                </h2>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-start"
                aria-labelledby="dropdownMenuLink"
              >
                {currencyCodes.map((codes, i) => (
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      key={i}
                      href="#"
                      value={codes}
                      onClick={this.dropdownSelect}
                    >
                      {codes} - {currencyNames[i]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-xl-4 mx-auto mt-4 text-center">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={eu}
                  className="currency-converter-icon d-inline border border-dark"
                ></img>
                <h2 className="d-inline-block align-middle ml-2 text-center">
                  EUR
                </h2>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 3
                  </a>
                </li>
              </ul>
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
                className="form-control form-control-lg my-4"
                type="number"
                placeholder="$1.00"
                onChange={this.handleChange}
              />
            </div>
            <div className="col text-center">
              <input
                className="form-control form-control-lg my-4 disabled"
                type="number"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
