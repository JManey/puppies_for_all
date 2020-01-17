import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";

import PuppyView from "./components/PuppyView/PuppyView";

import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Album from "./components/MaterialAlbum/Album";

import MaterialCard from "./components/SignUpCard/SignUpCard";
import SignupPage from "./pages/SignUpPage/SignupPage";

export default class App extends Component {
  // state = {
  //   puppies: [{ name: "Ginger" }],
  //   users: [{ name: "Justin" }]
  // };

  // componentDidMount() {
  //   this.setState({
  //     puppies: puppies,
  //     users: users
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Header />
            <h1>Welcome to Puppy Smiles!</h1>
            <div>
              {/* should be Container */}
              <main>
                <Route exact path="/" render={() => <MainPage />} />
                <Route
                  exact
                  path="/api/users/signupForm"
                  render={() => <SignupPage />}
                />
              </main>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
