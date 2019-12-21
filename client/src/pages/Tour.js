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
    console.log("", this.state.tour);
    return (
      <div>
        <div>
          {tour ? (
            <div>
              <DemoCarousel pictures={tour.picture} />

              <div className="carta tour-container">
                <h1>{tour.mountainId.mountainName}</h1>
                <p>
                  <strong>Location: </strong>
                  {tour.mountainId.location}
                </p>
                <p>
                  <strong>Region: </strong>
                  {tour.mountainId.region}
                </p>
                <p>
                  <strong>Height:</strong> {tour.mountainId.height} mt
                </p>
                <p>
                  <strong>Elevation Gain:</strong>
                  {tour.mountainId.elevationGain} mt
                </p>
                <p>
                  <strong>Difficulty:</strong> {tour.mountainId.difficulty}
                </p>
                <p>
                  <strong>Snow Quality:</strong> {tour.snowQuality} -{" "}
                  {tour.snowDepth} cm
                </p>

                {/* <p>
                  <strong>Useful links:</strong>
                </p>
                <p>
                  <a href={tour.mountainId.link} target="_blank">
                    Tour Details
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.aineva.it/bollettini/#top"
                    target="_blank"
                  >
                    AINEVA
                  </a>
                </p> */}

                <span>{tour.description}</span>
              </div>

              <div>
                <h2 style={{ marginTop: "40px" }}>Comments</h2>
                {this.state.tour.comments.map((tour, index) => {
                  return (
                    <div key={index}>
                      <p style={{ position: "relative", top: "10px" }}>
                        <strong>{tour.username}</strong>
                      </p>
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
        <div>
          <form onSubmit={this.submitHandler}>
            <textarea
              style={{
                width: "60%",
                height: "200px",
                borderRadius: "4px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                border: "none",
                padding: "10px"
              }}
              type="text"
              name="message"
              placeholder="message"
              onChange={this.onChangeHandler}
            />
            <div style={{ width: "60%", margin: "0 auto" }}>
              <button className="btn" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
