import React from "react";

const Currencies = (props) => {
  const { i, codes, currencyNames, onClick } = props;
  return (
    <React.Fragment>
      <li>
        <button
          type="button"
          className="dropdown-item"
          key={i}
          href="#"
          value={codes}
          onClick={onClick}
        >
          {codes} - {currencyNames[i]}
        </button>
      </li>
    </React.Fragment>
  );
};

export default Currencies;
