import React from "react";
import { json, checkStatus } from "./utils";
import Converter from "./Converter";
import CurrencyTables from "./CurrencyTables";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
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
    const { currencies } = this.state;
    return (
      <React.Fragment>
        <div className="container my-2 py-2">
          <div className="row">
            <div className="col mx-auto">
              <h1 className="text-center mt-2">
                Get accurate <b>currency exchange rates</b> fast.
              </h1>
            </div>
          </div>
          <Converter currencies={currencies} />
        </div>
        <div className="container py-2 my-2">
          <div className="row">
            <div className="col mx-auto">
              <h1 className="text-center mt-4 pt-4">
                Daily coverage of <b>33 currencies.</b>
              </h1>
            </div>
            <CurrencyTables currencies={currencies} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
