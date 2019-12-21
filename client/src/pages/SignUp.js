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
      })
      .catch(res => {
        this.setState({
          errorMessage: res.response.data.errorMessage
        });
      });
  };

  render() {
    return (
      <div className="login">
        <h1>Create your account</h1>
        <form onSubmit={this.submitHandler} className="form">
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
          <button className="btn" type="submit">
            submit
          </button>
          <p>
            Already have a login?
            <Link to="/login"> Login </Link>
          </p>
        </form>
        <p>
          {this.state.errorMessage ? (
            <p className="error-message">{this.state.errorMessage}</p>
          ) : (
            <p></p>
          )}
        </p>
      </div>
    );
  }
}
