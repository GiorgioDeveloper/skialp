import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/authService";
import Video from "../backvideo.mp4";

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
      <nav className="sticky">
        {this.props.loggedinUser ? (
          <div classNaem="navy">
            <ul>
              <li>
                <Link to="/your-tours">Your Tours</Link>
              </li>
              <li>
                <Link to="/create-tour">Create Tour</Link>
              </li>
              <li>
                <Link to="/all-tours">All Tours</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/" onClick={this.logoutHandler} className="active">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <div className="content">
              <h1>SKIALP</h1>
              <span>
                Save and share your tours
                <br /> find the latest information to better plan your tours
              </span>
              <div style={{ marginTop: "30px", color: "white" }}>
                <span>
                  <Link
                    style={{
                      color: "white",
                      display: "inline-block",
                      marginRight: "10px"
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
                <span>
                  <Link style={{ color: "white" }} to="/signup">
                    Signup
                  </Link>
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  }
}
