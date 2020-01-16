import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import AddPuppy from "./components/AddPuppy/AddPuppy";
import PuppyCard from "./components/PuppyCard/PuppyCard";
import NavBar from "./components/NavBar/NavBar";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <>
        <div className="App">
          <Header />
          <h1>Welcome to Puppy Smiles!</h1>
          <PuppyCard />
        </div>
      </>
    );
  }
}
