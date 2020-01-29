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
  let allPups = props.puppies;
  console.log("allpups", allPups);
  let userPups = props.user.puppyRef;
  let myPups = [];

  userPups.forEach(pup => {
    allPups.forEach(eachOne => {
      console.log("each", eachOne);
      if (eachOne._id === pup) {
        myPups.push(eachOne);
      }
    });
  });

  console.log("myPups", myPups);

  // userPups.forEach(pup => {
  //   console.log(pup);
  //   myPups.push(allPups.puppyRef.filter(pup));
  // });

  return myPups.length ? (
    <>
      <h1>Puppies Index!</h1>
      <CardDeck className="mx-auto carddeck container-fluid">
        {myPups.map(puppy => (
          <PuppyIndexCard
            puppy={puppy}
            handleDeletePuppy={props.handleDeletePuppy}
            key={puppy._id}
          />
        ))}
      </CardDeck>
    </>
  ) : (
    <>
      <h1>Puppies Index!</h1>
      <h3>Add a Puppy!</h3>
    </>
  );
}

export default MyPupsPage;
