import React from "react";
import "./style.css";
import PuppyIndexCard from "../../components/PuppyIndexCard/PuppyIndexCard";
import CardDeck from "react-bootstrap/CardDeck";

function MyPupsPage(props) {
  // let mypups = [];
  //  console.log("user from mupupspage", props.user);
  // mypups = props.user.pupprRef
  //   ? props.user.pupprRef.forEach(pup => console.log(pup))
  //   : null;
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

export default MyPupsPage;
