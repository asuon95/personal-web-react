import React, { Component } from "react";

class NewProject extends Component {
  state = {};

  handleRedirect = (event, link) => {
    event.preventDefault();
    if (window.confirm("You're about to leave this page. Continue?")) {
      window.open(link);
    }
  };

  render() {
    const { title, description, githubLink, siteLink } = this.props;
    return (
      <div
        style={{ paddingBottom: "50px" }}
        className="project-content-container"
      >
        <h2 className="section-cis-header">{title}</h2>
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
      </div>
    );
  }
}

export default NewProject;
