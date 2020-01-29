import React, { Component } from "react";
import userService from "../../utils/userService";
import "./AddPuppy.css";

class AddPuppyForm extends Component {
  state = {
    formData: {
      name: "",
      age: null,
      weight: null,
      sex: "Female",
      description: ""
    }
  };

  formRef = React.createRef();

  handleChange = e => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
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

  render() {
    return (
      <div className="Modal addForm" style={{minWidth: "300px", maxWidth="300px"}}>
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
