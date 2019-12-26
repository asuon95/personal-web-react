import React, { Component } from "react";

class ProjectNewsAPIBreakdown extends Component {
  state = {};

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

  //detects and call scrollFunction on window scroll
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>{" "}
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

export default ProjectNewsAPIBreakdown;
