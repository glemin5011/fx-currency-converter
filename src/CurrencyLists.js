import React from "react";

const CurrencyLists = (props) => {
  const { i, codes, rate } = props;
  return (
    <React.Fragment>
      <li key={i}>
        <p>
          <img
            src={require(`./country-logos/${codes}.png`).default}
            className="currency-lists-icon d-inline mx-2"
          ></img>
          {codes}:{" "}
          {(() => {
            if (rate !== undefined) {
              return rate;
            } else {
              return <span>Loading...</span>;
            }
          })()}
        </p>
      </li>
    </React.Fragment>
  );
};

export default CurrencyLists;