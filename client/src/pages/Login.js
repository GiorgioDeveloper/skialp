import React from "react";
import { loginAPI } from "../api/authService";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //   submitHandler = e => {
  //     e.preventDefault();
  //     loginAPI(this.state);
  //     this.props.setUserState(this.state);
  //     this.props.history.push("/");
  //   };

  submitHandler = async e => {
    e.preventDefault();
    try {
      const user = await loginAPI(this.state);

      this.props.setUserState(user.currentUser);

      this.props.history.push("/Home");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>this is the login page</h1>
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
          You don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>
      </div>
    );
  }
}
