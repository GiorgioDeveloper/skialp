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
      <div>
        <h1>this is the Create-Tour page</h1>
        <form ref={this.formRef} onSubmit={this.submitHandler}>
          <input type="file" name="picture" />
          <Auto type="text" name="mountainName" setValue={this.setValue} />

          {/* input hidden creto per poter passare mountainId al server tramite req.body, extrastep fatto per poter passare anche la foto, che non e' parte dello this.state */}

          <input type="text" name="mountainId" value={this.state.mountainId} />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
