import React from "react";
import { json, checkStatus } from "./utils";

class CurrencyTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "USD",
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    fetch(`https://altexchangerateapi.herokuapp.com/currencies`)
      .then(checkStatus)
      .then(json)
      .then((response) => {
        this.setState({ currencies: response });
        console.log(this.state.currencies);
      });
  }

  render() {
    const { baseCurrency } = this.state;
    return (
      <div className="container my-4 row-wrapper">
        <div className="row">
          <div className="col-6 col-xl-4 mx-auto mt-4 text-center">
            <h5>Currency pairs for 1 {baseCurrency}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
              <li>Item 7</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyTables;
