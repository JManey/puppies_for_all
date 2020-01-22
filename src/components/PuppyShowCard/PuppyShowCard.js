import React from "react";
import { Link } from "react-router-dom";

function PuppyShowCard(props) {
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
        </dl>
      </div>
      <div className="panel-footer">
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => props.handleDeletePuppy(props.puppy._id)}
        >
          DELETE
        </button>
        <Link
          to={{
            pathname: "/puppies/edit",
            state: { puppy }
          }}
        >
          EDIT
        </Link>

        <Link to="/puppies">RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default PuppyShowCard;
