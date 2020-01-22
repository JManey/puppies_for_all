import React, { Component } from "react";
import "./PuppyShowPage.css";
import puppyService from "../../utils/puppyService";
import PuppyShowCard from "../../components/PuppyShowCard/PuppyShowCard";

// export default class PuppyShowPage extends Component {
//   state = {
//     puppy: []
//   };

//   async componentDidMount(puppy) {
//     console.log(puppy);

//     const showPup = await puppyService.getPuppy(puppy._id);
//     this.setState({ puppy: showPup });
//   }

//   render() {
function PuppyShowPage(props) {
  const puppy = props.location.state.puppy;

  return (
    <>
      <h1>Puppy show view</h1>
      <div>
        <PuppyShowCard
          key={puppy._id}
          puppy={puppy}
          handleDeletePuppy={props.handleDeletePuppy}
          handleEditPuppy={props.handleEditPuppy}
        />
      </div>
    </>
  );
}

export default PuppyShowPage;
