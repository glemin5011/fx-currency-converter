import React from "react";
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
      exchangeAmount: "",
      rate: [],
      conversionResult: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.dropdownSelectLeft = this.dropdownSelectLeft.bind(this);
    this.dropdownSelectRight = this.dropdownSelectRight.bind(this);
    this.swapCurrencies = this.swapCurrencies.bind(this);
    this.fetchRates = this.fetchRates.bind(this);
    this.conversionCalculator = this.conversionCalculator.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
    this.fetchRates(this.state.leftCurrency); //initial fetch of rates
  }

  fetchCurrencies() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ currencies: response });
      });
  }

  fetchRates(base) {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ rate: response });
        console.log(response);
        console.log(this.state.rate.rates);
      });
  }

  handleChange(event) {
    const input = parseFloat(event.target.value);
    if (Number.isNaN(input)) {
      this.setState({
        exchangeAmount: "",
        conversionResult: "",
      });
      return;
    } else if (this.state.leftCurrency === this.state.rightCurrency) {
      this.setState({
        exchangeAmount: event.target.value,
        conversionResult: event.target.value,
      });
    } else {
      const conversionResult = this.conversionCalculator(
        input,
        this.state.rate.rates[this.state.rightCurrency]
      ).toFixed(2);
      this.setState({
        exchangeAmount: input,
        conversionResult,
      });
    }
  }

  conversionCalculator(amount, exchangeRate) {
    return amount * exchangeRate;
  }

  dropdownSelectLeft(event) {
    this.setState({ leftCurrency: event.target.value });
    this.fetchRates(event.target.value); // API call for all rates to base currency
    this.setState({
      exchangeAmount: "",
      conversionResult: "",
    });
  }

  dropdownSelectRight(event) {
    const { exchangeAmount } = this.state;
    this.setState({ rightCurrency: event.target.value });
    const conversionResult = this.conversionCalculator(
      exchangeAmount,
      this.state.rate.rates[event.target.value]
    ).toFixed(3);
    this.setState({
      exchangeAmount,
      conversionResult,
    });
  }
  swapCurrencies() {
    let { newRight, newLeft } = "";
    newRight = this.state.leftCurrency;
    newLeft = this.state.rightCurrency;
    console.log(newLeft, newRight);
    this.setState({
      rightCurrency: newRight,
      leftCurrency: newLeft,
      exchangeAmount: "",
      conversionResult: "",
    });
    this.fetchRates(newLeft);
  }

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
                className=""
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    require(`./country-logos/${this.state.leftCurrency}.png`)
                      .default
                  }
                  className="currency-converter-icon d-inline"
                ></img>
                <h2 className="d-inline-block align-middle ms-2 fw-bold">
                  {leftCurrency}
                </h2>
                <i className="fas fa-chevron-down ms-2"></i>
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
                className=""
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    require(`./country-logos/${this.state.rightCurrency}.png`)
                      .default
                  }
                  className="currency-converter-icon d-inline"
                ></img>
                <h2 className="d-inline-block align-middle ms-2 text-center fw-bold">
                  {rightCurrency}
                </h2>
                <i className="fas fa-chevron-down ms-2"></i>
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
                className="btn btn-lg btn-outline-dark"
                onClick={this.swapCurrencies}
              >
                <i className="fas fa-exchange-alt"></i>
              </button>
            </div>
          </div>
          <div className="row text-center">
            <div className="col text-center">
              <input
                className="form-control form-control-lg my-4"
                type="number"
                placeholder="1.00"
                min="0"
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
