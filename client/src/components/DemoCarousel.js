import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        {this.props.pictures.map((foto, index) => {
          console.log("foto", foto);
          return (
            <div>
              <img style={{ width: "70%" }} src={foto} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default DemoCarousel;
