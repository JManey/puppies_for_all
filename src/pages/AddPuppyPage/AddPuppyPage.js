import React, { Component } from "react";
import "./AddPuppyPage.css";
import { Link } from "react-router-dom";

class AddPuppyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      formData: {
        name: "",
        age: undefined,
        weight: undefined,
        sex: "Female",
        description: ""
      }
    };
  }

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.handleAddPuppy(this.state.formData);
  };

  isFormInvalid() {
    return !(
      this.state.formData.name &&
      this.state.formData.age &&
      this.state.formData.description &&
      this.state.formData.weight
    );
  }

  render(history) {
    return (
      <div className="Modal mx-auto formSize">
        <header className="header-footer">Add Puppy</header>
        <form
          ref={this.formRef}
          className="form-horizontal"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={this.state.formData.name}
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
                value={this.state.formData.age}
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
                value={this.state.formData.weight}
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
                  value={this.state.formData.value}
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
                value={this.state.formData.description}
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
                Add {this.state.formData.name}
              </button>
              &nbsp;&nbsp;
              <button>
                {" "}
                <Link to="/">Cancel</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPuppyPage;
