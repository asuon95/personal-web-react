import React, { Component } from "react";
import NewProject from "./../common/newproject";

class Project extends Component {
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
      <div className="my-project-container">
        <div className="project-header-container">
          <div className="project-header-bg">P R O J E C T</div>
          <h2 className="project-header">P r o j e c t</h2>
        </div>
        <div className="project-content">
          <div className="section-cis-body">
            <div className="align-page container">
              <div className="section-cis-container bg-dark">
                <NewProject
                  title="React App: News API"
                  description="React application utilizing a news API and Bootstrap to process and
                  display news. Deployment to Heroku. Please note that the page may be
                  slow to start on initial start up. Please wait about 20-30 sec and try
                  refreshing if no content is showing. Thanks."
                  githubLink="https://github.com/asuon95/react-news-site-v2.git"
                  siteLink="https://glacial-scrubland-82750.herokuapp.com/home"
                  // imageSrc="../resources/images/project/react.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <div className="gradientBG-dark"></div>
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

export default Project;
