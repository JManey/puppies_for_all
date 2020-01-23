import React from "react";
import "./PuppyIndexPage.css";
import PuppyIndexCard from "../../components/PuppyIndexCard/PuppyIndexCard";
import CardDeck from "react-bootstrap/CardDeck";

function PuppyIndexPage(props) {
  return (
    <>
      <h1>Puppies Index!</h1>
      <CardDeck className="mx-auto carddeck container-fluid">
        {props.puppies.map(puppy => (
          <PuppyIndexCard
            puppy={puppy}
            handleDeletePuppy={props.handleDeletePuppy}
            key={puppy._id}
          />
        ))}
      </CardDeck>
    </>
  );
}

export default PuppyIndexPage;
