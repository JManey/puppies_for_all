import React from "react";
import { Link } from "react-router-dom";

function PuppyIndexCard(props) {
  let puppy = props.puppy;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.puppy.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Description</dt>
          <dd>{props.puppy.description}</dd>
          <dt>Age</dt>
          <dd>{props.puppy.age}</dd>
          <dt>Weight</dt>
          <dd>{props.puppy.weight}</dd>
          <dt>Sex</dt>
          <dd>{props.puppy.sex}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link
          to={{
            pathname: "/puppies/details",
            state: { puppy }
          }}
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

export default PuppyIndexCard;
