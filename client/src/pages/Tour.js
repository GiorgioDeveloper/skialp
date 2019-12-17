import React from "react";
// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";
import DemoCarousel from "../components/DemoCarousel";

export default class Tour extends React.Component {
  state = {
    tour: null,
    message: null,
    tourId: null
  };

  // funzione creata per poter fare il reload del tour dopo l aggiunta dei commenti, quindi lo richiamiamo su submithandler ma anche in component didmount che viene chiamato per primo dala DOM
  getTour = () => {
    const id = this.props.match.params.id;

    service.get(`/tour/${id}`).then(res => {
      console.log(res);
      this.setState({
        tour: res.data.tour,
        tourId: res.data.tour._id
      });
    });
  };
  componentDidMount() {
    this.getTour();
  }

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    const comment = { message: this.state.message, tourId: this.state.tourId };
    e.preventDefault();
    console.log(this.state.message);
    service
      // comments e' l oggetto che passiamo sulla rout create-comments
      .post("/create-comment", comment)
      .then(res => {
        this.getTour();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let tour = this.state.tour;

    return (
      <div>
        <div>
          {" "}
          {tour ? (
            <div>
              <DemoCarousel pictures={tour.picture} />

              <p>{tour.mountainId.mountainName}</p>
              <p>{tour.mountainId.location}</p>
              <p>{tour.mountainId.region}</p>
              <p>Height: {tour.mountainId.height} mt</p>
              <p>Elevation Gain: {tour.mountainId.elevationGain} mt</p>
              <p>Difficulty: {tour.mountainId.difficulty}</p>
              <p>
                <a href={tour.mountainId.link} target="_blank">
                  Tour Details
                </a>
              </p>
              <p>
                <a href="https://www.aineva.it/bollettini/#top" target="_blank">
                  AINEVA
                </a>
              </p>
              <p>
                Snow Quality: {tour.snowQuality} - {tour.snowDepth} cm
              </p>
              <p>Description: {tour.description}</p>
              <div>
                {this.state.tour.comments.map((tour, index) => {
                  return (
                    <div key={index}>
                      <p>Created by {tour.username}</p>
                      <p>{tour.message}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p>loading Tour</p>
          )}
        </div>
        <form onSubmit={this.submitHandler}>
          <textarea
            type="text"
            name="message"
            placeholder="message"
            onChange={this.onChangeHandler}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
