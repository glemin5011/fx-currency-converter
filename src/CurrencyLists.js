import React from "react";

const CurrencyLists = (props) => {
  const { i, codes } = props;
  return (
    <React.Fragment>
      <li key={i}>
        <p>
          <img
            src={require(`./country-logos/${codes}.png`).default}
            className="currency-lists-icon d-inline mx-2"
          ></img>
          {codes}
        </p>
      </li>
    </React.Fragment>
  );
};

export default CurrencyLists;
