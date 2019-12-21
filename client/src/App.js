import React from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { isLoggedIn } from "./api/authService";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import AllTours from "./pages/AllTours";
import YourTours from "./pages/YourTours";
import CreateTour from "./pages/CreateTour";
import NavBar from "./components/NavBar";
import UpdateProfile from "./components/UpdateProfile";
import Tour from "./pages/Tour";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Video from "./backvideo.mp4";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedinUser: null,
      isLoading: true,
      err: null
    };
  }

  setUserState = user => {
    // If user is loggedIn state will be set with user,
    // otherwise user will be null.
    // App.js setState()
    this.setState({
      loggedinUser: user
    });
  };

  componentDidMount = async () => {
    try {
      const currentUser = await isLoggedIn();
      this.setState({
        loggedinUser: currentUser,
        isLoading: false
      });
    } catch (err) {
      this.setState({
        loggedinUser: null,
        isLoading: false
      });
    }
  };

  render() {
    console.log(this.state.loggedinUser, "da app.js");
    if (this.state.isLoading) return <p>... Loading</p>;
    return (
      <div className="App">
        <NavBar
          loggedinUser={this.state.loggedinUser}
          setUserState={this.setUserState}
        />
        {!this.state.loggedinUser && (
          <video autoPlay muted loop className="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
        )}
        <Switch>
          <Route path="/signup" component={SignUp}></Route>
          <Route
            path="/login"
            render={props => (
              <Login {...props} setUserState={this.setUserState} />
            )}
          />

          <PrivateRoute
            path="/profile"
            loggedinUser={this.state.loggedinUser}
            setUserState={this.setUserState}
            component={Profile}
          />

          <PrivateRoute
            path="/update-profile"
            loggedinUser={this.state.loggedinUser}
            setUserState={this.setUserState}
            component={UpdateProfile}
          />

          <PrivateRoute
            path="/all-tours"
            loggedinUser={this.state.loggedinUser}
            component={AllTours}
          />
          <PrivateRoute
            path="/yours-tours"
            loggedinUser={this.state.loggedinUser}
            component={YourTours}
          />
          <PrivateRoute
            path="/create-tour"
            loggedinUser={this.state.loggedinUser}
            component={CreateTour}
          />

          <PrivateRoute
            path="/tour/:id"
            loggedinUser={this.state.loggedinUser}
            component={Tour}
          />
        </Switch>
      </div>
    );
  }
}
