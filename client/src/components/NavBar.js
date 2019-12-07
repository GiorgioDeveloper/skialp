import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/authService";

export default class NavBar extends React.Component {
  logoutHandler = () => {
    try {
      logout();

      this.props.setUserState(null);
      this.props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <nav>
        {this.props.loggedinUser ? (
          <div>
            <h1>hello {this.props.loggedinUser.username} welcome on SKIALP</h1>
            <p>
              <Link to="/your-tours">Your Tours</Link>
            </p>
            <p>
              <Link to="/create-tour">Create Tour</Link>
            </p>
            <p>
              <Link to="/all-tours">Find Tours</Link>
            </p>
            <p>
              <Link to="/profile">Profile</Link>
            </p>

            <p>
              <Link to="/" onClick={this.logoutHandler}>
                Logout
              </Link>
            </p>
          </div>
        ) : (
          <p>
            <h1>SKIALP</h1>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </p>
        )}
      </nav>
    );
  }
}
