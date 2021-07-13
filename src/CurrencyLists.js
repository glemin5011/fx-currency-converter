import React from "react";

const CurrencyLists = (props) => {
  const { i, codes, rate, baseCurrency } = props;
  return (
    <React.Fragment>
      <div className="col-12 col-sm-6 col-xl-4">
        <ul className="currencyList list-group list-group-flush bg-transparent">
          {codes !== baseCurrency ? (
            <li key={i} className="list-group-item bg-transparent">
              <h4>
                <img
                  src={require(`./country-logos/${codes}.png`).default}
                  className="currency-lists-icon d-inline mx-2"
                ></img>
                <b>{codes}:</b> {rate[codes]}
              </h4>
            </li>
          ) : (
            <li key={i} className="list-group-item bg-transparent">
              <h4>
                <img
                  src={require(`./country-logos/${codes}.png`).default}
                  className="currency-lists-icon d-inline mx-2"
                ></img>
                <b>{codes}:</b> 1.00
              </h4>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CurrencyLists;
