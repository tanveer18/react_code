import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
    <nav
      classNameName={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <a classNameName="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          
          <form classNameName="d-flex">
            <input
              classNameName="form-control me-2"
              type="search"class
              placeholder="Search"
              aria-label="Search"
             
            />
          
            <button classNameName="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckChecked"
        onClick={props.toggleMode}
      />
      <label className="form-check-label" htmlfor="flexSwitchCheckChecked">
        Enable Dark Mode
      </label>
    </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set the title",
  about: "set the values of abouts",
};
