import React from "react";
import { createProfile } from "../api/userService";

export default class UpdateProfile extends React.Component {
  formRef = React.createRef();

  submitHandler = e => {
    e.preventDefault();

    // formData per passare la foto nel req.file (req.body e' solo testo)
    const formData = new FormData(this.formRef.current);
    // createTour(this.state, formData)
    createProfile(formData)
      .then(res => {
        console.log(res);
        this.props.setUserState(res);
        this.props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   errorMessage: res.response.data.errorMessage
        // });
      });
  };

  render() {
    console.log(this.props, "vedi props");
    return (
      <div>
        <h1>Hi {this.props.username} update your profile</h1>

        <form ref={this.formRef} onSubmit={this.submitHandler}>
          <input type="file" name="profilePicture" />
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="surname" placeholder="surname" />
          <input type="text" name="age" placeholder="age" />
          <input type="text" name="skiLevel" placeholder="skiLevel" />
          <input type="text" name="about" placeholder="about" />

          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
