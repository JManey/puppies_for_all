import React, { Component } from "react";
import AddPuppyForm from "../../components/AddPuppy/AddPuppyForm";
import "./AddPuppyPage.css";

class AddPuppyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = msg => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div className="AddPuppyPage">
        <AddPuppyForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default AddPuppyPage;
