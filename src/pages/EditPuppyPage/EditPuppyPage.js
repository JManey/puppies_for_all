import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import puppyService from "../../utils/puppyService";
import axios from "axios";
// import $ from "jquery";
import { response } from "express";

class EditPuppyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invalidForm: false,
      formData: this.props.location.state.puppy,
      // success: false,
      selectedFile: null,
      imgUpload: null
    };

    // this.getBase64 = this.getBase64.bind(this);
  }

  formRef = React.createRef();

  // handler for photos upload
  handlePhotoChange = ev => {
    // console.log("!!!!!!!!!!!!!!!!!!!!", ev.target.files[0]);

    this.setState({ selectedFile: ev.target.files[0] });
  };
  // Perform the upload
  handleUpload = async () => {
    const data = new FormData();
    if (this.state.selectedFile) {
      data.append("file", this.state.selectedFile);

      axios
        .post(`/api/puppy/photo/:id`, data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.ocShowAlert("Max size: 2MB", "red");
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let fileName = response.data;
              console.log("fileName", fileName);
              this.ocShowAlert("File Uploaded", "#3089cf");
            }
          }
        })
        .catch(error => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };

  getBase64(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        imgUpload: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }

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
    return (
      <Card className="carddeck" bg="warning">
        <Card.Title>Edit Puppy</Card.Title>
        <Form
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
          <Button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE PUPPY
          </Button>
          &nbsp;&nbsp;
          <Link to="/puppies">
            <Button>CANCEL</Button>
          </Link>
        </Form>
        <div className="form-group">
          <label>Upload Photo</label>
          <input
            type="file"
            className="form-control"
            name="url"
            onChange={this.handlePhotoChange}
          />
          <Button className="btn btn-xs" onClick={this.handleUpload}>
            ADD PHOTO
          </Button>
        </div>
      </Card>
    );
  }
}

export default EditPuppyPage;
