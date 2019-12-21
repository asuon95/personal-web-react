import React, { Component } from "react";
import { toast } from "react-toastify";

class NewProject extends Component {
  state = {};

  handleRedirect = (event, link) => {
    event.preventDefault();
    if (window.confirm("You're about to leave this page. Continue?")) {
      window.open(link);
    }
  };

  handleImageClick = () => {
    const targetImage = document.getElementById("myproject-image");
    if (targetImage.style.transform === "") {
      targetImage.style.transform = "scale(1.5)";
      targetImage.style.border = "solid 2px red";
    } else {
      targetImage.style.transform = "";
      targetImage.style.border = "solid 2px white";
    }
  };

  handleMoreDetailClick = () => {
    toast.info("Work in progress. Check back soon for update.", {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  render() {
    const { title, description, githubLink, siteLink } = this.props;
    return (
      <div
        style={{ paddingBottom: "50px", marginBottom: "50px" }}
        className="project-content-container bg-project-inner"
      >
        <h2 className="section-cis-header">{title}</h2>
        <img
          onClick={this.handleImageClick}
          className="project-image"
          id="myproject-image"
          src={require("../resources/images/project/front-page.png")}
          alt=""
        />
        <p>
          {description}
          <br />
          <br />
          Github:{" "}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={event => this.handleRedirect(event, githubLink)}
          >
            {githubLink}
          </a>
          <br />
          <br />
          Site Link:{" "}
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={event => this.handleRedirect(event, siteLink)}
          >
            {siteLink}
          </a>
        </p>
        <div className="project-more-detail">
          <a
            onClick={this.handleMoreDetailClick}
            href="#"
            className="project-more-detail-link"
          >
            More Detail <i className="fa fa-chevron-right"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default NewProject;
