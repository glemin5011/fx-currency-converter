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

  componentDidMount() {
    this.fetchRates(this.state.baseCurrency); //initial fetch of rates
  }

  dropdownSelect(event) {
    this.setState({ baseCurrency: event.target.value });
    this.fetchRates(event.target.value); // API call for all rates to base currency
    console.log(this.state.rate.rates);
  }

  render() {
    const { baseCurrency, isLoading } = this.state;
    const { currencies } = this.props;
    const currencyCodes = Object.keys(currencies);
    console.log(currencyCodes);
    const currencyNames = Object.values(currencies);

    return (
      <div className="container my-4 row-wrapper">
        <div className="row mx-auto">
          <div className="col-12 col-xl-4 mx-auto mt-4">
            <a
              className=""
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <h4 className="d-inline-block mx-auto fw-bold">
                Exchange rates for 1 {baseCurrency}
              </h4>
              <i className="fas fa-chevron-down ms-2"></i>
            </a>
            <ul
              className="dropdown-menu mt-2"
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
        <div className="row my-3">
          {isLoading ? (
            <h1 className="text-center mx-auto my-auto">Loading...</h1>
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
        </div>
      </div>
    );
  }
}

export default CurrencyTables;
