import React from "react";
import "./PuppyShowPage.css";
import PuppyShowCard from "../../components/PuppyShowCard/PuppyShowCard";
import CardDeck from "react-bootstrap/CardDeck";

function PuppyShowPage(props) {
  const puppy = props.location.state.puppy;

  return (
    <>
      <h1>Puppy show view</h1>
      <CardDeck className="mx-auto cards">
        <PuppyShowCard
          key={puppy._id}
          puppy={puppy}
          handleDeletePuppy={props.handleDeletePuppy}
          handleEditPuppy={props.handleEditPuppy}
        />
      </CardDeck>
    </>
  );
}

export default PuppyShowPage;
