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
          <div>
            <h1>Hi {user.username} this is your profile</h1>
            <h2>Name: {user.name}</h2>
            <h2>surname: {user.surname}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Ski Level: {user.skiLevel}</h2>
            <h2>Total Tours: {user.tours.length}</h2>
            <h2>Total gain: </h2>
            <p>About: {user.about}</p>

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
            <p>
              <Link to="/update-profile">Update Profile</Link>
            </p>
          </div>
        ) : (
          <UpdateProfile setUserState={this.props.setUserState} />
        )}
      </div>
    );
  }
}
