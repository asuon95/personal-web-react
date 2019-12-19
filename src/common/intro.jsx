import React from "react";
import "../App.css";
import "../css/waveAnimation.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="wave"></div>
      <div className="intro-content">
        <div className="title">
          <h2>Passionate Developer Seeking An Opportunity</h2>
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
            Hello! My name is Ace. I am seeking a challenging and exciting
            position as developer/programmer with any technical company.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Intro;
