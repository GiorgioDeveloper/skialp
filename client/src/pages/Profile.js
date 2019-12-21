import React from "react";
import { Link } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile";

export default class Profile extends React.Component {
  render() {
    let user = this.props.loggedinUser;
    console.log(this.props, "props from app.js");
    return (
      <div>
        {user.name && user.surname ? (
          <div className="profile-section">
            <div>
              <h1 style={{ marginTop: "20px" }}>
                Welcome back {user.username}
              </h1>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Surname:</strong> {user.surname}
              </p>
              <p>
                <strong>Age: </strong>
                {user.age}
              </p>
              <p>
                <strong>Ski Level:</strong> {user.skiLevel}
              </p>
              {user.tours && (
                <p>
                  <strong>Total Tours:</strong> {user.tours.length}
                </p>
              )}
              <p>
                <strong>Total gain:</strong>{" "}
              </p>
              <p>
                <strong>About: </strong>
                {user.about}
              </p>
              <p style={{ marginTop: "40px" }}>
                <Link className="btn" to="/update-profile">
                  Update Profile
                </Link>
              </p>
            </div>
            <div>
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="profile-foto"
                  className="profile-foto"
                ></img>
              ) : (
                <img
                  src={user.profilePicture}
                  alt="profile-foto"
                  className="profile-foto"
                ></img>
              )}
            </div>
          </div>
        ) : (
          <UpdateProfile setUserState={this.props.setUserState} />
        )}
      </div>
    );
  }
}
