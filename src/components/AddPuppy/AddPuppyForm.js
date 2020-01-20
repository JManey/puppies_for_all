import React, { Component } from "react";
import userService from "../../utils/userService";

class AddPuppyForm extends Component {
  state = {
    name: "",
    age: null,
    weight: null,
    sex: "Female",
    description: ""
  };

  handleChange = e => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.addPup(this.state);
      // Let <App> know a user has signed up!
      // this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage

      this.props.history.push("/users");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.age &&
      this.state.description &&
      this.state.weight
    );
  }

  render() {
    return (
      <div className="Modal">
        <header className="header-footer">Add Puppy</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                value={this.state.age}
                name="age"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="weight"
                className="form-control"
                placeholder="Weight"
                value={this.state.weight}
                name="weight"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>
                Sex:
                <select
                  name="sex"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="description"
                className="form-control"
                placeholder="Description"
                value={this.state.description}
                name="description"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default"
                // disabled={this.isFormInvalid()}
              >
                Add {this.state.name}
              </button>
              &nbsp;&nbsp;
              <button onClick={() => this.props.history.push("/")}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPuppyForm;
