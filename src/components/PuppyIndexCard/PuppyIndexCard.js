import React from "react";
import { Link } from "react-router-dom";

function PuppyIndexCard({ puppy }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{puppy.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Breed</dt>
          <dd>{puppy.weight}</dd>
          <dt>Age</dt>
          <dd>{puppy.description}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/puppy/details" puppy={puppy}>
          More Details
        </Link>
      </div>
    </div>
  );
}

export default PuppyIndexCard;
