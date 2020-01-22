import React from "react";
import "./PuppyIndexPage.css";
import PuppyIndexCard from "../../components/PuppyIndexCard/PuppyIndexCard";

function PuppyIndexPage(props) {
  return (
    <>
      <h1>Puppies Index!</h1>
      <div className="PuppyIndexPage-grid">
        {props.puppies.map(puppy => (
          <PuppyIndexCard
            puppy={puppy}
            handleDeletePuppy={props.handleDeletePuppy}
            key={puppy._id}
          />
        ))}
      </div>
    </>
  );
}

export default PuppyIndexPage;
