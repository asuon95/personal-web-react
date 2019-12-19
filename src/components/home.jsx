import React, { Component } from "react";
import "../App.css";
import Intro from "../common/intro";
import BodyContent from "../common/bodyContent";
import { getContent } from "../common/bodyContentMaterial";

class Home extends Component {
  state = {
    bodyContents: {
      content1: {
        title: "",
        imgTitle: "",
        content: ""
      },
      content2: {
        title: "",
        imgTitle: "",
        content: ""
      },
      content3: {
        title: "",
        imgTitle: "",
        content: ""
      }
    }
  };

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

  componentDidMount() {
    //detects and call scrollFunction on window scroll
    window.addEventListener("scroll", this.scrollFunction);
    const bodyContents = getContent();

    this.setState({ bodyContents });
  }

  render() {
    const { content1, content2, content3 } = this.state.bodyContents;
    const titleCenter = {
      margin: "50px 0 50px 0"
    };

    return (
      <React.Fragment>
        <div className="my-home-container">
          <Intro />
          <div className="body-container">
            <div className="container">
              <div className="body-content-container">
                <div style={titleCenter}>
                  <h1>Why I'm Worth Investing</h1>
                  <p>There are many reasons, but here are a few.</p>
                </div>
                <BodyContent
                  title={content1.title}
                  imgTitle={content1.imgTitle}
                  content={content1.content}
                />
                <BodyContent
                  title={content2.title}
                  imgTitle={content2.imgTitle}
                  content={content2.content}
                />
                <BodyContent
                  title={content3.title}
                  imgTitle={content3.imgTitle}
                  content={content3.content}
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
          </div>
          <div className="gradientBG-container">
            <div className="gradientBG"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
