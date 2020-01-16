import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PuppyView from "./components/PuppyView/PuppyView";
import PuppyCard from "./components/PuppyCard/PuppyCard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
                {/* <Route exact path="/" render={() => <PuppyView />} /> */}
                <Route exact path="/puppy" render={() => <PuppyCard />} />
              </main>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
