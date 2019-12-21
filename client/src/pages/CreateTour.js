import React from "react";
import { createTour } from "../api/userService";
import Auto from "../components/AutoSuggest";

export default class CreateTour extends React.Component {
  state = {
    mountainName: "",
    mountainId: ""
  };

  // parte del form ref per upload foto
  formRef = React.createRef();

  setValue = (value, id) => {
    this.setState({
      mountainName: value,
      mountainId: id
    });
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    // formData per passare la foto nel req.file (req.body e' solo testo)
    const formData = new FormData(this.formRef.current);
    // createTour(this.state, formData)
    createTour(formData)
      .then(res => {
        console.log(this.state.mountainId);
        this.props.history.push("/your-tours");
      })
      .catch(res => {
        debugger;
        this.setState({
          errorMessage: res.response.data.errorMessage
        });
      });
  };

  render() {
    return (
      <div className="create-tour">
        <h1>Create your tour</h1>
        <form ref={this.formRef} onSubmit={this.submitHandler}>
          <input type="file" name="picture" multiple />
          <input type="date" name="date" />

          <Auto type="text" name="mountainName" setValue={this.setValue} />

          {/* input hidden creto per poter passare mountainId al server tramite req.body, extrastep fatto per poter passare anche la foto, che non e' parte dello this.state */}

          <input
            type="hidden"
            name="mountainId"
            value={this.state.mountainId}
          />

          <select type="text" name="snowQuality" placeholder="snowQuality">
            <option value="powder">Powder</option>
            <option value="crud">Crud</option>
            <option value="crust">Crust</option>
            <option value="slush">Slush</option>
            <option value="ice">Ice</option>
          </select>

          <select type="number" name="snowDepth" placeholder="snowDepth">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
          </select>

          <select type="text" name="recomended" placeholder="recomended">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <textarea
            style={{
              width: "500px",
              height: "200px",
              borderRadius: "4px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              border: "none",
              padding: "10px"
            }}
            name="description"
            placeholder="description"
          />
          <div style={{ width: "500px", margin: "0 auto" }}>
            <button className="btn" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
