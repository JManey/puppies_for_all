import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import puppyService from "./utils/puppyService";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddPuppyPage from "./pages/AddPuppyPage/AddPuppyPage";
import PuppyIndexPage from "./pages/PuppyIndexPage/PuppyIndexPage";
import PuppyShowPage from "./pages/PuppyShowPage/PuppyShowPage";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      puppies: [],
      puppy: null,
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const puppies = await puppyService.getPuppies();
    this.setState({ puppies });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddPuppy = async newPuppyData => {
    const newPuppy = await puppyService.create(newPuppyData);
    this.setState(
      state => ({
        puppies: [...state.puppies, newPuppy]
      }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/")
    );
  };

  handleGetPuppies = () => {
    this.setState({ puppies: puppyService.getPuppies() });
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
                        handleAddPuppy={this.handleAddPuppy}
                        handleGetPuppies={this.handleGetPuppies}
                        message="Add Puppy Page"
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/puppies"
                    render={({ history }) => (
                      <PuppyIndexPage
                        history={history}
                        puppies={this.state.puppies}
                        user={this.state.user}
                        message="Lots of Puppies!"
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/puppies/details"
                    render={({ history }) => (
                      <PuppyShowPage
                        history={history}
                        puppies={this.state.puppies}
                        user={this.state.user}
                        message="Puppy show page!"
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
