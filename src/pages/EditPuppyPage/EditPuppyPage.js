import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPuppyPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.puppy
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.handleUpdatePuppy(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    console.log(this.props.location);
    return (
      <>
        <h1>Edit Puppy</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <input
              className="form-control"
              name="sex"
              value={this.state.formData.sex}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              className="form-control"
              name="age"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              className="form-control"
              name="weight"
              value={this.state.formData.weight}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label>Upload Photo</label>
            <input
              type="file"
              className="form-control"
              name="description"
              value={this.state.formData.url}
              onChange={this.handleChange}
            />
          </div> */}
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE PUPPY
          </button>
          &nbsp;&nbsp;
          <Link to="/puppies">CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditPuppyPage;
