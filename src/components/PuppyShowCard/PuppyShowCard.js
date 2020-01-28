import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./style.css";
import Button from "react-bootstrap/Button";

function PuppyShowCard(props) {
  let puppy = props.puppy;
  return (
    <Card bg="warning">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.puppy.name}</Card.Title>

        <Card.Text>Description</Card.Text>
        <Card.Text>{props.puppy.description}</Card.Text>
        <Card.Text>Age</Card.Text>
        <Card.Text>{props.puppy.age}</Card.Text>

        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() =>
            props.handleDeletePuppy(props.puppy._id, props.user.email)
          }
        >
          DELETE
        </button>
        <Link
          className="btn"
          to={{
            pathname: "/puppies/edit",
            state: { puppy }
          }}
        >
          <Button>EDIT</Button>
        </Link>

        <Link to="/puppies">
          <Button>RETURN TO LIST</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PuppyShowCard;
