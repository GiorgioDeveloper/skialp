import React from "react";
// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";

let toursArray = [];
export default class AllTours extends React.Component {
  state = {
    tours: []
  };

  // serve per aggiornare lo state di tours e popolare l array
  componentDidMount() {
    service.get("/all-tours").then(res => {
      toursArray = res.data.tours;
      this.setState({
        tours: res.data.tours
      });
    });
  }

  // funzione per search bar based on mountain
  searchTour = e => {
    let filteredArray = toursArray.filter(tour => {
      return tour.mountainId.mountainName
        .toUpperCase()
        .includes(e.target.value.toUpperCase());
    });
    console.log(e.target.value);
    if (e.target.value == "") {
      this.setState({
        tours: toursArray
      });
      console.log("empty vaue");
      console.log(toursArray, "toursArray");
    } else {
      this.setState({
        tours: filteredArray
      });
    }
  };

  render() {
    console.log(toursArray, "tours array");
    return (
      <div>
        <h1>Hi {this.props.loggedinUser.username} find your tour</h1>

        <input
          type="text"
          placeholder="search tour"
          onChange={this.searchTour}
        ></input>

        {this.state.tours.map((tour, index) => {
          return (
            <div key={index}>
              <p>{tour.mountainId.mountainName}</p>
              <p>{tour.snowQuality}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
