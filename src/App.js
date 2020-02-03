import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import puppyService from "./utils/puppyService";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SUPage from "./pages/SUPage/SUPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddPuppyPage from "./pages/AddPuppyPage/AddPuppyPage";
import PuppyIndexPage from "./pages/PuppyIndexPage/PuppyIndexPage";
import PuppyShowPage from "./pages/PuppyShowPage/PuppyShowPage";
import EditPuppyPage from "./pages/EditPuppyPage/EditPuppyPage";
import MyPupsPage from "./pages/MyPupsPage/MyPupsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";

export default class App extends Component {
  state = {
    puppies: [],
    // puppy: null,
    user: null
  };

  async componentDidMount() {
    try {
      const puppies = await puppyService.getPuppies();
      const user = await userService.getUser();
      // const id = user._id;
      // const userWithPups = await userService.getUserPups(id);
      this.setState({ puppies: puppies, user: user });
    } catch (err) {
      console.log("error with cdm", err);
    }
  }

  // async componentDidUpdate() {
  //   try {
  //     const puppies = await puppyService.getPuppies();
  //     const user = await userService.getUser();
  //     this.setState({ puppies: puppies, user: user });
  //   } catch (err) {
  //     console.log("error with cdm", err);
  //   }
  // }

  handleGetUser = async () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddPuppy = async newPuppyData => {
    // const newPuppy =
    await puppyService.create(newPuppyData);
    console.log(this.state.user);
    const id = this.state.user._id;
    try {
      const puppies = await puppyService.getPuppies();
      const user = await userService.getUserPups(id);
      console.log("hello&&&&&*************", user);
      this.setState(
        {
          user: user,
          puppies: puppies
        },
        () => {
          // console.log("***********************", user);
          // console.log("***********************", this.state.user);
          this.props.history.push("/users/pups");
        }
      );
    } catch (err) {
      console.log("error with cdm", err);
    }
  };

  handleUpdatePuppy = async updatedPupData => {
    const updatedPuppy = await puppyService.updatePuppy(updatedPupData);
    const newPuppiesArray = this.state.puppies.map(p =>
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    this.setState({ puppies: newPuppiesArray }, () =>
      this.props.history.push("/users/pups")
    );
  };

  handleDeletePuppy = async (id, user) => {
    await puppyService.deleteOne(id, user);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        puppies: state.puppies.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/users/pups")
    );
  };

  handleGetPuppies = () => {
    console.log("getpuppies from app");
    this.setState({
      puppies: puppyService.getPuppies(),
      user: userService.getUser()
    });
  };

  render() {
    return (
      <>
        {/* <BootNav /> */}
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleGetPuppies={this.handleGetPuppies}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
        <Switch>
          <div className="App">
            <div>
              {/* should be Container */}
              <main className="bg-image">
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
                    <SUPage
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
                      // handleGetPuppies={this.handleGetPuppies}
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
                  render={({ location }) => (
                    <PuppyShowPage
                      user={this.state.user}
                      location={location}
                      handleDeletePuppy={this.handleDeletePuppy}
                      handleEditPuppy={this.handleEditPuppy}
                    />
                  )}
                />
                <Route
                  exact
                  path="/puppies/edit"
                  render={({ location }) => (
                    <EditPuppyPage
                      location={location}
                      handleUpdatePuppy={this.handleUpdatePuppy}
                    />
                  )}
                />
                <Route
                  exact
                  path="/users/pups"
                  render={({ location }) => (
                    <MyPupsPage
                      puppies={this.state.puppies}
                      user={this.state.user}
                      location={location}
                      handleUpdatePuppy={this.handleUpdatePuppy}
                    />
                  )}
                />
              </main>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}
