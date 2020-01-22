import React, { Component } from "react";
import "./PuppyShowPage.css";
import puppyService from "../../utils/puppyService";
import PuppyShowCard from "../../components/PuppyShowCard/PuppyShowCard";

export default class PuppyShowPage extends Component {
  constructor() {
    super();

    this.state = {
      puppy: []
    };
  }

  async componentDidMount(puppy) {
    console.log(puppy);

    const showPup = await puppyService.getPuppy(puppy._id);
    this.setState({ puppy: showPup });
  }

  render() {
    return (
      <>
        <h1>My Puppy!</h1>
        <div className="PuppyShowPage-grid">
          <PuppyShowCard />
        </div>
      </>
    );
  }
}
