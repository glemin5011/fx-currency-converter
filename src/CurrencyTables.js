import React from "react";
import { json, checkStatus } from "./utils";
import Currencies from "./Currencies";
import CurrencyLists from "./CurrencyLists";

class CurrencyTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "USD",
      currencies: [],
      rate: [],
      isLoading: true,
    };
    this.dropdownSelect = this.dropdownSelect.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.fetchRates = this.fetchRates.bind(this);
  }

  fetchRates(base) {
    fetch(`https://altexchangerateapi.herokuapp.com/latest?from=${base}`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ rate: response, isLoading: false });
        console.log(response);
        console.log(this.state.rate.rates);
      });
  }

  //Do i need another API call for all currencies or do i pass down props from API call in Converter?
  fetchCurrencies() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ currencies: response });
        console.log(this.state.currencies);
      });
  }

  componentDidMount() {
    this.fetchRates(this.state.baseCurrency); //initial fetch of rates
    this.fetchCurrencies();
  }

  dropdownSelect(event) {
    this.setState({ baseCurrency: event.target.value });
    this.fetchRates(event.target.value); // API call for all rates to base currency
    console.log(this.state.rate.rates);
  }

  render() {
    const { currencies, baseCurrency, isLoading } = this.state;
    const currencyCodes = Object.keys(currencies);
    console.log(currencyCodes);
    const currencyNames = Object.values(currencies);

    return (
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
              <h2 className="d-inline-block align-middle ml-4">
                {baseCurrency}
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
                  onClick={this.dropdownSelect}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              {isLoading ? (
                <h1>Loading...</h1>
              ) : (
                currencyCodes.map((codes, i) => (
                  <CurrencyLists
                    i={i}
                    key={i}
                    codes={codes}
                    rate={this.state.rate.rates}
                    baseCurrency={baseCurrency}
                  />
                ))
              )}
            </ul>
          </div>
          <div className="col-6">
            <ul></ul>
          </div>
          <div className="col-6">
            <ul></ul>
          </div>
          <div className="col-6">
            <ul></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyTables;
