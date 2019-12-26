import React from "react";
import "../App.css";
import "../css/waveAnimation.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="wave"></div>
      <div className="intro-content">
        <div className="title">
          <h2>Passionate Developer Seeking Career Opportunity</h2>
        </div>
        <div className="image">
          <img
            className="intro-image"
            src={require("../resources/images/profile_pic.JPG")}
            alt="This text shouldn't be here ..."
          />
        </div>
        <div className="description-container">
          <h5 className="description">
            Welcome! My name is Ace Suon. I am seeking a challenging and
            exciting position as developer/programmer in a technical company.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Intro;
