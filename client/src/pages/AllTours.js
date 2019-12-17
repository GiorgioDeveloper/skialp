// import React from "react";
// // in authservice abbiamo definito Axios e lo importiamo cosi
// import { service } from "../api/authService";
// import { Link } from "react-router-dom";

// // per formattare la data e usarla poi nel backend per la query in Mongodb
// function getDateFormat(date) {
//   let year = date.getUTCFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   let myDate = year + "-" + month + "-" + day;

//   return myDate;
// }

// // array tour da usare sotto
// let toursArray = [];
// export default class AllTours extends React.Component {
//   state = {
//     tours: [],
//     radioBtn: ""
//   };

//   // serve per aggiornare lo state di tours e popolare l array
//   componentDidMount() {
//     service.get("/all-tours").then(res => {
//       toursArray = res.data.tours;
//       this.setState({
//         tours: res.data.tours
//       });
//     });
//   }

//   // serve per creare la URL con il range di date e mandarlo nel backend
//   getToursByDate = e => {
//     let today = new Date();
//     let todayDate = getDateFormat(today);
//     let startDate;

//     if (e.target.value === "yesterday") {
//       today.setDate(today.getDate() - 1);
//       startDate = getDateFormat(today);
//     } else if (e.target.value === "lastWeek") {
//       today.setDate(today.getDate() - 7);
//       startDate = getDateFormat(today);
//     } else if (e.target.value === "lastMonth") {
//       today.setDate(today.getDate() - 30);
//       getDateFormat(today);
//     } else if (e.target.value === "all") {
//       startDate = today = "2019-01-01";
//     }

//     console.log(todayDate, "stratdate");

//     service
//       .get(`/tours-by-date?today=${todayDate}&startDate=${startDate}`)
//       .then(res => {
//         console.log(res.data, "date tours");
//         this.setState({
//           tours: res.data.tours
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   // funzione per search bar based on mountain
//   searchLocation = e => {
//     let filteredArray = toursArray.filter(tour => {
//       return tour.mountainId.location
//         .toUpperCase()
//         .includes(e.target.value.toUpperCase());
//     });
//     console.log(e.target.value);
//     if (e.target.value === "") {
//       this.setState({
//         tours: toursArray
//       });
//       console.log("empty vaue");
//       console.log(toursArray, "toursArray");
//     } else {
//       this.setState({
//         tours: filteredArray
//       });
//     }
//   };

//   // funzione per search bar based on RECOMENDED
//   searchRecom = e => {
//     let filteredArray = toursArray.filter(tour => {
//       return tour.recomended
//         .toUpperCase()
//         .includes(e.target.value.toUpperCase());
//     });
//     console.log(e.target.value);
//     if (e.target.value === "") {
//       this.setState({
//         radioBtn: "",
//         tours: toursArray
//       });
//       console.log("empty vaue");
//       console.log(toursArray, "toursArray");
//     } else {
//       this.setState({
//         radioBtn: e.target.value,
//         tours: filteredArray
//       });
//     }
//   };

//   // funzione per search bar based on SNOW QUALITY
//   searchSnow = e => {
//     let filteredArray = toursArray.filter(tour => {
//       return tour.snowQuality
//         .toUpperCase()
//         .includes(e.target.value.toUpperCase());
//     });
//     console.log(e.target.value);
//     if (e.target.value === "") {
//       this.setState({
//         tours: toursArray
//       });
//       console.log("empty vaue");
//       console.log(toursArray, "toursArray");
//     } else {
//       this.setState({
//         tours: filteredArray
//       });
//     }
//   };

//   // funzione per search bar based on DIFFICULTY
//   searchDifficulty = e => {
//     let filteredArray = toursArray.filter(tour => {
//       return (
//         tour.mountainId.difficulty.toUpperCase() == e.target.value.toUpperCase()
//       );
//     });
//     console.log(e.target.value);
//     if (e.target.value === "") {
//       this.setState({
//         tours: toursArray
//       });
//       console.log("empty vaue");
//       console.log(toursArray, "toursArray");
//     } else {
//       this.setState({
//         tours: filteredArray
//       });
//     }
//   };

//   // funzione per search bar based on DATE
//   searchDate = e => {
//     let filteredArray = toursArray.filter(tour => {
//       return tour.date.includes(e.target.value);
//     });
//     console.log(e.target.value);
//     if (e.target.value === "") {
//       this.setState({
//         tours: toursArray
//       });
//       console.log("empty vaue");
//       console.log(toursArray, "toursArray");
//     } else {
//       this.setState({
//         tours: filteredArray
//       });
//     }
//   };

//   render() {
//     console.log(toursArray, "tours array");
//     return (
//       <div>
//         <h1>Hi {this.props.loggedinUser.username} find your tour</h1>

//         <select name="Date" onChange={this.getToursByDate}>
//           <option value="all">ALL</option>
//           <option value="yesterday">Yesterday</option>
//           <option value="lastWeek">Last week</option>
//           <option value="lastMonth">Last month</option>
//         </select>

//         <select
//           type="text"
//           name="snowQuality"
//           placeholder="snow quality"
//           onChange={this.searchLocation}
//         >
//           <option value="">ALL</option>
//           <option value="Alpi Occidentali<">Alpi Occidentali</option>
//           <option value="Alpi Orientali">Alpi Orientali</option>
//           <option value="Alpi Retiche">Alpi Retiche</option>
//           <option value="Dolomiti">Dolomiti</option>
//           <option value="Alpi Giulie">Alpi Giulie</option>
//           <option value="Alpi Pennine">Alpi Pennine</option>
//           <option value="Alpi Apuane">Alpi Apuane</option>
//           <option value="Alpi Centrali">Alpi Centrali</option>
//         </select>

//         <select
//           type="text"
//           name="snowQuality"
//           placeholder="snow quality"
//           onChange={this.searchSnow}
//         >
//           <option value="">ALL</option>
//           <option value="powder">Powder</option>
//           <option value="crud">Crud</option>
//           <option value="crust">Crust</option>
//           <option value="slush">Slush</option>
//           <option value="ice">Ice</option>
//         </select>

//         <select
//           type="text"
//           name="snowQuality"
//           placeholder="snow quality"
//           onChange={this.searchDifficulty}
//         >
//           <option value="">ALL</option>
//           <option value="MS">MS</option>
//           <option value="MSA">MSA</option>
//           <option value="BS">BS</option>
//           <option value="BSA">BSA</option>
//           <option value="OS">OS</option>
//           <option value="OSA">OSA</option>
//         </select>

//         <div>
//           <td>
//             <input
//               type="radio"
//               name="Yes"
//               value="Yes"
//               checked={this.state.radioBtn === "Yes"}
//               onChange={this.searchRecom}
//             />
//             YES
//           </td>
//           <td>
//             <input
//               type="radio"
//               name="No"
//               value="No"
//               checked={this.state.radioBtn === "No"}
//               onChange={this.searchRecom}
//             />
//             NO
//           </td>
//           <td>
//             <input
//               type="radio"
//               name=""
//               value=""
//               checked={this.state.radioBtn === ""}
//               onChange={this.searchRecom}
//             />
//             ALL
//           </td>
//         </div>

//         {this.state.tours.map((tour, index) => {
//           return (
//             <div key={index}>
//               <Link to={`/tour/${tour._id}`}>
//                 <img
//                   src={tour.picture}
//                   alt="mountain"
//                   className="mountain-foto"
//                 ></img>

//                 <p>{tour.mountainId.mountainName}</p>
//                 <p>{tour.mountainId.location}</p>
//                 <p>{tour.mountainId.region}</p>
//                 <p>Height: {tour.mountainId.height} mt</p>
//                 <p>Elevation Gain: {tour.mountainId.elevationGain} mt</p>
//                 <p>Difficulty: {tour.mountainId.difficulty}</p>
//                 <p>
//                   Snow Quality: {tour.snowQuality} - {tour.snowDepth} cm
//                 </p>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

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
    service.get("/all-tours").then(res => {
      toursArray = res.data.tours;
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
          tours={this.state.tours}
          toursArray={toursArray}
          setToursState={this.setToursState}
        />
      </div>
    );
  }
}
