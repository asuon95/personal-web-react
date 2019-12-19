import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <h5 className="colored-text">SOCIAL MEDIA</h5>
      <a
        href="https://www.linkedin.com/in/ace-suon-1331a3139/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <i className="fa fa-linkedin"></i>
      </a>
      &emsp;
      <a
        href="https://github.com/asuon95"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <i className="fa fa-github"></i>
      </a>
      &emsp;
      <div className="colored-text">Ace Suon &copy; 2020</div>
    </div>
  );
};

export default Footer;
