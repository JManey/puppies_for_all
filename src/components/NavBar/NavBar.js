import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = props => {
  let nav = props.user ? (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">PUPPIES FOR ALL</Link>
      </Navbar.Brand>
      <Navbar.Toggle ria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>
              LOG OUT
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/users/addpuppy" className="NavBar-link">
              ADD PUPPY
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/puppies" className="NavBar-link">
              Puppies!
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/users/pups" className="NavBar-link">
              MY PUPS
            </Link>
          </Nav.Link>
          <span className="NavBar-welcome">
            WELCOME, {props.user.first_name}
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle ria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/login" className="NavBar-link">
            LOG IN
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/signup" className="NavBar-link">
            SIGN UP
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link
            to="/puppies"
            className="NavBar-link"
            onClick={props.handleGetPuppies}
          >
            Puppies!
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
