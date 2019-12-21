import React from "react";
// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";
import ToursList from "../components/ToursList";

export default class AllTours extends React.Component {
  state = {
    tours: []
  };

  // serve per aggiornare lo state di tours e popolare l array
  componentDidMount() {
    service.get("/all-tours").then(res => {
      this.setState({
        tours: res.data.tours
      });
    });
  }

  setToursState = tours => {
    this.setState({
      tours: tours
    });
  };

  render() {
    return (
      <div>
        <h1>Hi {this.props.loggedinUser.username} find your tour</h1>
        <ToursList
          {...this.props}
          tours={this.state.tours}
          setToursState={this.setToursState}
        />
      </div>
    );
  }
}
