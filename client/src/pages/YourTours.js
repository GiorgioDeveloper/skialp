import React from "react";
// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";
import { Link } from "react-router-dom";
import ToursList from "../components/ToursList";

// array tour da usare sotto
let toursArray = [];
export default class AllTours extends React.Component {
  state = {
    tours: []
  };

  // serve per aggiornare lo state di tours e popolare l array
  componentDidMount() {
    service.get("/your-tours").then(res => {
      toursArray = res.data.tours;
      this.setState({
        tours: res.data.tours
      });
    });
  }

  render() {
    console.log(toursArray, "tours array");
    return (
      <div>
        <h1>Hi {this.props.loggedinUser.username} find your tour</h1>
        <ToursList tours={this.state.tours} toursArray={toursArray} />
      </div>
    );
  }
}
