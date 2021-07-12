import React from "react";
import USD from "./country-logos/usa.png";
import eu from "./country-logos/eu.png";
import { eventListeners } from "@popperjs/core";
import { json, checkStatus } from "./utils";
import Currencies from "./Currencies";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      leftCurrency: "USD",
      rightCurrency: "EUR",
      exchangeAmount: 1,
      rate: [],
      conversionResult: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.dropdownSelectLeft = this.dropdownSelectLeft.bind(this);
    this.dropdownSelectRight = this.dropdownSelectRight.bind(this);
    //this.swapCurrencies = this.swapCurrencies.bind(this);
    this.fetchRates = this.fetchRates.bind(this);
    this.conversionCalculator = this.conversionCalculator.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
    this.fetchRates(); //initial fetch
  }

  fetchCurrencies() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ currencies: response });
      });
  }

  fetchRates() {
    const { leftCurrency, rightCurrency } = this.state;
    fetch(
      `https://altexchangerateapi.herokuapp.com/latest?from=${leftCurrency}&to=${rightCurrency}`
    )
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ rate: response });
        console.log(response);
        console.log(Object.values(this.state.rate.rates));
      });
  }

  handleChange(event) {
    const input = parseFloat(event.target.value);
    if (Number.isNaN(input)) {
      this.setState({
        exchangeAmount: "",
      });
      return;
    }

    const conversionResult = this.conversionCalculator(
      input,
      Object.values(this.state.rate.rates)
    ).toFixed(3);
    console.log(conversionResult);
    this.setState({
      exchangeAmount: input,
      conversionResult,
    });
  }

  conversionCalculator(amount, exchangeRate) {
    return amount * exchangeRate;
  }

  dropdownSelectLeft(event) {
    this.setState({ leftCurrency: event.target.value });
    this.fetchRates();
  }
  dropdownSelectRight(event) {
    this.setState({ rightCurrency: event.target.value });
    this.fetchRates();
  }
  /*swapCurrencies() {
    let { newRight, newLeft } = "";
    newRight = this.state.leftCurrency;
    newLeft = this.state.rightcurrency;
    console.log(newLeft);
    this.setState({ rightcurrency: newRight, leftCurrency: newLeft });
  }*/

  render() {
    const { currencies, leftCurrency, rightCurrency } = this.state;
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
                className="dropdown-menu dropdown-menu-start mt-2"
                aria-labelledby="dropdownMenuLink"
              >
                {currencyCodes.map((codes, i) => (
                  <Currencies
                    i={i}
                    key={i}
                    codes={codes}
                    currencyNames={currencyNames}
                    onClick={this.dropdownSelectLeft}
                  />
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
                  {rightCurrency}
                </h2>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end mt-2"
                aria-labelledby="dropdownMenuLink"
              >
                {currencyCodes.map((codes, i) => (
                  <Currencies
                    i={i}
                    key={i}
                    codes={codes}
                    currencyNames={currencyNames}
                    onClick={this.dropdownSelectRight}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-4 mx-auto my-2 text-center">
              <button
                type="button"
                className="btn btn-primary btn-xl-lg"
                onClick={this.swapCurrencies}
              >
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
                value={this.state.exchangeAmount}
              />
            </div>
            <div className="col text-center">
              <input
                className="form-control form-control-lg my-4 disabled"
                type="number"
                placeholder=""
                value={this.state.conversionResult}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
