import React from "react";
import "../App.css";

const BodyContent = ({ title, imgTitle, content }) => {
  const imgTitleExtension = imgTitle !== "" ? imgTitle : "question.png";

  return (
    <div className="content-container">
      <h2 className="body-title">{title}</h2>
      <img
        className="body-image"
        style={{
          width: "20%",
          height: "auto",
          margin: "30px"
        }}
        src={require(`../resources/images/${imgTitleExtension}`)}
        alt=""
      />
      <p className="body-content">{content}</p>
    </div>
  );
};

export default BodyContent;
