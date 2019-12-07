// import React from "react";
// import { Link } from "react-router-dom";
// import UpdateProfile from "../components/UpdateProfile";

// export default class Profile extends React.Component {
//   state = {
//     profilePicture: this.props.profilePicture,
//     name: this.props.name,
//     surname: this.props.surname,
//     age: this.props.age,
//     skiLevel: this.props.skiLevel,
//     about: this.props.about
//   };

//   setProfileState = user => {
//     console.log(user, "user");
//     this.setState({
//       name: user.name,
//       profilePicture: user.profilePicture,
//       surname: user.surname,
//       age: user.age,
//       skiLevel: user.skiLevel,
//       about: user.about
//     });
//   };

//   render() {
//     return (
//       <div>
//         {(this.state.name || this.props.name) &&
//         (this.state.surname || this.props.surname) ? (
//           <div>
//             <h1>Hi {this.props.username} this is your profile</h1>
//             <h2>Name: {this.state.name}</h2>
//             <h2>surname: {this.state.surname}</h2>
//             <h2>Age: {this.state.age}</h2>
//             <h2>Ski Level: {this.state.skiLevel}</h2>
//             <p>about: {this.state.about}</p>

//             {this.state.profilePicture ? (
//               <img src={this.state.profilePicture} alt="image"></img>
//             ) : (
//               <img src={this.props.profilePicture} alt="image"></img>
//             )}
//             <p>
//               <Link to="/update-profile">Update Profile</Link>
//             </p>
//           </div>
//         ) : (
//           <UpdateProfile setProfileState={this.setProfileState} />
//         )}
//       </div>
//     );
//   }
// }

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
            <p>about: {user.about}</p>

            {user.profilePicture ? (
              <img src={user.profilePicture} alt="image"></img>
            ) : (
              <img src={user.profilePicture} alt="image"></img>
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
