import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    this.state = {
      items: { item_count: items },
      items_jsx: []
    };
  }

  //push number of items into state's items_jsx array
  componentDidMount = () => {
    const state = { ...this.state };

    for (let i = 2; i <= state.items.item_count; i++) {
      state.items_jsx.push(i);
    }

    // once the array is filled with the unique item num we can
    // map over it and render each as carousel item
    this.setState({ state });
  };

  render() {
    return (
      <div className="my-carousel-container">
        <div
          id="carouselExampleControls"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="7000">
              <img
                src={require("../resources/images/cpp/cpp (1).jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            {//map over state's items_jsx to produce each carousel item not including 1st one
            this.state.items_jsx.map((item, key) => (
              <div
                className="carousel-item"
                data-interval="7000"
                id={`item-${item}`}
                key={key}
              >
                <img
                  src={require(`../resources/images/cpp/cpp (${item}).jpg`)}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
