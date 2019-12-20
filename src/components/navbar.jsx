import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  handleNavbarClick = () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const toggleDiv = document.getElementById("navbarNavAltMarkup");

    toggleBtn.className = "navbar-toggler collapsed";
    toggleDiv.className = "navbar-collapse collapse";
    // .toggleClass("navbar-toggler collapsed");

    // .toggleClass("navbar-collapse collapse");
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <button
            id="toggle-btn"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            className="navbar-brand"
            href="/home"
            style={{ maxHeight: "40px", padding: "0 50px 0 20px" }}
          >
            <img
              src={require("../resources/images/logo.png")}
              alt=""
              style={{ maxHeight: "40px", padding: "0 20%" }}
            />
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            onClick={this.handleNavbarClick}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  HOME <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/education">
                  EDUCATION
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/project">
                  PROJECT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text">
              <a
                href="https://www.linkedin.com/in/ace-suon-1331a3139/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-navbar"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              &emsp;
              <a
                href="https://github.com/asuon95"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-navbar"
              >
                <i className="fa fa-github"></i>
              </a>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
