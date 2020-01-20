import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PuppyView from "./components/PuppyView/PuppyView";
import AddPuppyPage from "./pages/AddPuppyPage/AddPuppyPage";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      puppies: [],
      user: userService.getUser()
    };
  }
  // componentDidMount() {
  //   this.setState({
  //     puppies: puppies,
  //     users: users
  //   });
  // }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          {/* <NavBar user={this.state.user} /> */}
          <Header
            user={this.state.user}
            handleLogout={this.handleLogout}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          <Switch>
            <div className="App">
              <div>
                {/* should be Container */}
                <main>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <MainPage
                        user={this.user}
                        handleLogout={this.handleLogout}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                      />
                    )}
                  />

                  <Route
                    exact
                    path="/signup"
                    render={({ history }) => (
                      <SignupPage
                        history={history}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/login"
                    render={({ history }) => (
                      <LoginPage
                        history={history}
                        handleLogout={this.handleLogout}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/logout"
                    render={() => (
                      <MainPage
                        handleLogout={this.handleLogout}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/users"
                    render={({ history }) => (
                      <MainPage
                        history={history}
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/users/addpuppy"
                    render={({ history }) => (
                      <AddPuppyPage
                        history={history}
                        user={this.state.user}
                        message="Add Puppy Page"
                      />
                    )}
                  />
                </main>
              </div>
            </div>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
