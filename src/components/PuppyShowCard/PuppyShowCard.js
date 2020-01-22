import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import puppyService from "../../utils/puppyService";

export default class PuppyShowCard extends Component {
  constructor() {
    super();

    this.state = {
      puppies: [],
      puppy: [],
      user: userService.getUser()
    };
  }

  async componentDidMount(puppy) {
    console.log(puppy);
    const showPup = await puppyService.getPuppy(puppy._id);
    this.setState({ puppy: showPup });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.state.puppy.name}</h3>
        </div>
        <div className="panel-body">
          <dl>
            <dt>Breed</dt>
            <dd>{this.state.puppy.weight}</dd>
            <dt>Age</dt>
            <dd>{this.state.puppy.description}</dd>
          </dl>
        </div>
        <div className="panel-footer">
          <Link to="/">RETURN TO LIST</Link>
        </div>
      </div>
    );
  }
}
