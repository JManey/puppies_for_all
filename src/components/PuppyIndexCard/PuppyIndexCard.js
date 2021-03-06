import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function PuppyIndexCard(props) {
  let puppy = props.puppy;
  return (
    // <CardDeck className="cards">
    <Card
      className="mt-6 cardStyle"
      style={{ minWidth: "250px", maxWidth: "250px" }}
      bg="warning"
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.puppy.name}</Card.Title>

        {/* <Card.Text> */}
        <ListGroup variant="flush">
          <ListGroup.Item className="list-group-item-success">
            Description: {props.puppy.description}
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-success">
            Weight: {props.puppy.weight}
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item-success">
            Age: {props.puppy.age}
          </ListGroup.Item>
        </ListGroup>
        {/* </Card.Text> */}
      </Card.Body>
      <Link
        to={{
          pathname: "/puppies/details",
          state: { puppy }
        }}
      >
        <Button className="">More Details</Button>
      </Link>
    </Card>
    // </CardDeck>
  );
}

export default PuppyIndexCard;
