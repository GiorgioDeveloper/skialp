import React from "react";
// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";
import { Link } from "react-router-dom";
import { relative } from "path";

// per formattare la data e usarla poi nel backend per la query in Mongodb
function getDateFormat(date) {
  let year = date.getUTCFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let myDate = year + "-" + month + "-" + day;

  return myDate;
}

export default class ToursList extends React.Component {
  state = {
    location: "",
    difficulty: "",
    todayDate: "",
    startDate: "",
    snowQuality: "",
    recomended: ""
  };

  // serve per creare la URL con il range di date e mandarlo nel backend
  getToursByDate = e => {
    let today = new Date();
    let todayDate = getDateFormat(today);
    let startDate;

    if (e.target.value === "yesterday") {
      today.setDate(today.getDate() - 1);
      startDate = getDateFormat(today);
    } else if (e.target.value === "lastWeek") {
      today.setDate(today.getDate() - 7);
      startDate = getDateFormat(today);
    } else if (e.target.value === "lastMonth") {
      today.setDate(today.getDate() - 30);
      startDate = getDateFormat(today);
      console.log(today, "today");
    } else if (e.target.value === "all") {
      startDate = today = "";
    }
    this.setState({ todayDate, startDate }, () => this.getTours());
  };

  getTours = () => {
    const {
      location,
      difficulty,
      todayDate,
      startDate,
      snowQuality,
      recomended
    } = this.state;

    const userTours =
      this.props.history.location.pathname === "/your-tours" ? true : false;

    service
      .get(
        `/tours-by-date?todayDate=${todayDate}&startDate=${startDate}&location=${location}&difficulty=${difficulty}&snowQuality=${snowQuality}&recomended=${recomended}&userTours=${userTours}`
      )
      .then(res => {
        console.log(res.data, "date tours");

        this.props.setToursState(res.data.tours);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.getTours();
    });
  };

  render() {
    return (
      <div>
        <div style={{ padding: "5px 20px" }} className="flex-container">
          <p>
            <strong>Date</strong>
          </p>
          <select
            name="Date"
            onChange={this.getToursByDate}
            className="custom-select"
          >
            <option value="all">ALL</option>
            <option value="yesterday">Yesterday</option>
            <option value="lastWeek">Last week</option>
            <option value="lastMonth">Last month</option>
          </select>
          <p>
            <strong>Location</strong>
          </p>
          <select
            type="text"
            name="location"
            placeholder="snow quality"
            onChange={this.handleFilterChange}
            className="custom-select"
          >
            <option value="">ALL</option>
            <option value="Alpi Occidentali<">Alpi Occidentali</option>
            <option value="Alpi Orientali">Alpi Orientali</option>
            <option value="Alpi Retiche">Alpi Retiche</option>
            <option value="Dolomiti">Dolomiti</option>
            <option value="Alpi Giulie">Alpi Giulie</option>
            <option value="Alpi Pennine">Alpi Pennine</option>
            <option value="Alpi Apuane">Alpi Apuane</option>
            <option value="Alpi Centrali">Alpi Centrali</option>
          </select>
          <p>
            <strong>Snow</strong>
          </p>
          <select
            type="text"
            name="snowQuality"
            placeholder="snow quality"
            onChange={this.handleFilterChange}
            className="custom-select"
          >
            <option value="">ALL</option>
            <option value="powder">Powder</option>
            <option value="crud">Crud</option>
            <option value="crust">Crust</option>
            <option value="slush">Slush</option>
            <option value="ice">Ice</option>
          </select>
          <p>
            <strong>Level</strong>
          </p>
          <select
            type="text"
            name="difficulty"
            placeholder="snow quality"
            onChange={this.handleFilterChange}
            className="custom-select"
          >
            <option value="">ALL</option>
            <option value="MS">MS</option>
            <option value="MSA">MSA</option>
            <option value="BS">BS</option>
            <option value="BSA">BSA</option>
            <option value="OS">OS</option>
            <option value="OSA">OSA</option>
          </select>
          <p>
            <strong>Recomended</strong>
          </p>
          <select
            type="text"
            name="recomended"
            placeholder="recomended"
            onChange={this.handleFilterChange}
            className="custom-select"
          >
            <option value="">ALL</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
        </div>
        <div className="cart-container">
          {this.props.tours.map((tour, index) => {
            return (
              <div key={index} className="carta">
                <img
                  src={tour.picture[0]}
                  alt="mountain"
                  className="mountain-foto"
                  style={{ width: "100%" }}
                ></img>

                <div className="contain">
                  <h3 style={{ marginTop: "20px" }}>
                    {tour.mountainId.mountainName}
                  </h3>
                  <p>{tour.mountainId.location}</p>
                  <p>{tour.mountainId.region}</p>
                  <p>Height: {tour.mountainId.height} mt</p>
                  <p>Elevation Gain: {tour.mountainId.elevationGain} mt</p>
                  <p>Difficulty: {tour.mountainId.difficulty}</p>
                  <p>
                    Snow Quality: {tour.snowQuality} - {tour.snowDepth} cm
                  </p>
                </div>
                <div style={{ padding: "20px" }}>
                  <Link className="btn" to={`/tour/${tour._id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
