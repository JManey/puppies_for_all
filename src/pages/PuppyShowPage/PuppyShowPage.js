import React from "react";
import "./PuppyShowPage.css";
import PuppyShowCard from "../../components/PuppyShowCard/PuppyShowCard";

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
