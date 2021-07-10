import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="#">
            <h1>f(x)</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <h3 className="nav-link me-3" aria-current="page" href="#">
                  Home
                </h3>
              </li>
              <li className="nav-item me-4">
                <h3 className="nav-link me-3" href="#">
                  Link
                </h3>
              </li>
              <li className="nav-item me-4">
                <h3 className="nav-link me-3" href="#">
                  Disabled
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
