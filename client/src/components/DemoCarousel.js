import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        {this.props.pictures.map((foto, index) => {
          return (
            <div>
              <img src={foto} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;
