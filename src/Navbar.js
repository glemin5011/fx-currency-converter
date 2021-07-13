import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom">
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
                <a className="nav-link" aria-current="page" href="#">
                  <h3 className="me-4">Home</h3>
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://condescending-jang-046576.netlify.app/"
                  target="_blank"
                >
                  <h3 className="me-4">Portfolio Page</h3>
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#contact">
                  <h3 className="me-4">Contact</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
