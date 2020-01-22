import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="/users/addpuppy" className="NavBar-link">
        ADD PUPPY
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/puppies" className="NavBar-link">
        Puppies!
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/users/pups" className="NavBar-link">
        MY PUPS
      </Link>
      <span className="NavBar-welcome">WELCOME, {props.user.first_name}</span>
    </div>
  ) : (
    <div>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link
        to="/puppies"
        className="NavBar-link"
        onClick={props.handleGetPuppies}
      >
        Puppies!
      </Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
