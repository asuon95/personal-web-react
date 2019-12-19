import React, { Component } from "react";

class NotFound extends Component {
  //gets passed to componentDidMount() & determines top btn visibility
  scrollFunction = () => {
    const mybutton = document.getElementById("myBtn");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // on Top btn click set document's scroll positon to 0
  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  handleRedirect = e => {
    e.preventDefault();
    if (window.confirm("You're about to leave this page. Continue?")) {
      window.open("https://www.cpp.edu/");
    }
  };

  //detects and call scrollFunction on window scroll
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  render() {
    return (
      <div className="my-page-not-found-container">
        <div className="page-not-found-content">
          <h2 className="center-page">Can't find a PAW-age? Me neither ...</h2>
          <img
            className="puppy-page-not-found"
            src={require("../resources/images/404-puppy.png")}
            alt="Joel J. Martínez on Unsplash"
          />
        </div>
        <button onClick={this.topFunction} id="myBtn" title="Go to top">
          <i
            className="fa fa-chevron-up"
            style={{
              fontSize: "24px"
            }}
          ></i>
        </button>
      </div>
    );
  }
}

export default NotFound;
