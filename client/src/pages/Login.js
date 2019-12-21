import React from "react";
import { loginAPI } from "../api/authService";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errorMessage: null
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = async e => {
    e.preventDefault();
    try {
      const user = await loginAPI(this.state);

      this.props.setUserState(user.currentUser);

      this.props.history.push("/your-tours");
    } catch (err) {
      this.setState({
        errorMessage: this.props.errorMessage
      });
    }
  };

  render() {
    return (
      <div className="login">
        <h1>Login to your account</h1>
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
            You don't have an account?
            <Link to="/signup"> Signup</Link>
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
