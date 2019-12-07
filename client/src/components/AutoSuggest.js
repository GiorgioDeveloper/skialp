import Autosuggest from "react-autosuggest";
import React from "react";

// in authservice abbiamo definito Axios e lo importiamo cosi
import { service } from "../api/authService";

export default class Auto extends React.Component {
  // Autosuggest is a controlled component.
  // This means that you need to provide an input value
  // and an onChange handler that updates this value (see below).
  // Suggestions also need to be provided to the Autosuggest,
  // and they are initially empty because the Autosuggest is closed.
  state = {
    value: "",
    suggestions: [],
    // array montagne da popolare dal database mongodb
    mountains: []
  };

  // serve per aggiornare lo state di mountains e popolare l array
  componentDidMount() {
    service
      .get("/mountains")
      .then(res => this.setState({ mountains: res.data.mountains }));
  }
  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.mountains.filter(
          mountain =>
            mountain.mountainName.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = suggestion => suggestion.mountainName;

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => <div>{suggestion.mountainName} test</div>;

  onChange = (event, { newValue }) => {
    let myMountainId = "";

    let myMountain = this.state.mountains.filter(mountain => {
      return mountain.mountainName.includes(newValue);
    });

    if (myMountain.length > 0) {
      myMountainId = myMountain[0]._id;
      console.log("la montagna c e");
    } else {
      console.log("array vuota");
      myMountainId = "";
    }

    this.setState({
      value: newValue
    });
    // lift value up to CreateTour component
    this.props.setValue(newValue, myMountainId);

    // dobboamo mettere [0] perche .filter (come .map) ritornano sempre un array, anche se contiene un solo elemento
    // console.log(myMountain[0]._id, "id");
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "mountain",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    // aggiunto this. perche abbiamo spostato all interno del component la logica getSuggestion e renderSuggestion
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

// ORIGINALE //

// import Autosuggest from "react-autosuggest";
// import React from "react";
// import axios from "axios";

// const service = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   withCredentials: true
// });

// // Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: "Curo",
//     height: 3300,
//     area: "Alpi Orobie"
//   },
//   {
//     name: "Elm",
//     year: 2012
//   },

//   {
//     name: "Elmo",
//     year: 2012
//   },

//   {
//     name: "Elsa",
//     year: 2012
//   },

//   {
//     name: "Eletrre",
//     year: 2012
//   }
// ];

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0
//     ? []
//     : languages.filter(
//         lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
//       );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

// export default class Auto extends React.Component {
//   constructor() {
//     super();

//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
//     this.state = {
//       value: "",
//       suggestions: []
//     };
//   }

//   onChange = (event, { newValue }) => {
//     this.setState({
//       value: newValue
//     });
//     // lift value up to CreateTour component
//     this.props.setValue(newValue);
//   };

//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested = ({ value }) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

//   render() {
//     const { value, suggestions } = this.state;

//     // Autosuggest will pass through all these props to the input.
//     const inputProps = {
//       placeholder: "mountain",
//       value,
//       onChange: this.onChange
//     };

//     // Finally, render it!
//     return (
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
// }
