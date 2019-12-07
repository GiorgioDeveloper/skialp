import React from "react";
import { signup } from "../api/authService";
import { Link } from "react-router-dom";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: null
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    signup(this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/Login");
        // return res;
      })
      .catch(res => {
        console.log(res.response.data, "tesssst");
        this.setState({
          errorMessage: res.response.data.errorMessage
        });
      });
  };

  render() {
    return (
      <div>
        <h1>this is the signup page</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.onChangeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChangeHandler}
          />
          <button type="submit">submit</button>
        </form>
        <p>
          Already have a login?
          <Link to="/login"> Login </Link>
          <p>{this.state.errorMessage}</p>
        </p>
      </div>
    );
  }
}
