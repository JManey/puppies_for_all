import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = props => {
  let nav = props.user ? (
    <Navbar bg="info" expand="lg" sticky="top">
      <Navbar.Brand>
        <Nav.Link>
          <Link to="/" className="text-danger">
            PUPPIES FOR ALL
          </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle
        ria-controls="basic-navbar-nav"
        className="btn-outline-danger "
      />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="navbar-nav ml-auto ">
          <Nav.Link>
            <Link
              to="/"
              className="NavBar-link btn btn-outline-danger text-danger"
              onClick={props.handleLogout}
            >
              {/* <Link to="" className="NavBar-link" onClick={props.handleLogout}> */}
              LOG OUT
              {/* </Link> */}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/users/addpuppy"
              className="NavBar-link btn btn-outline-danger text-danger"
            >
              ADD PUPPY
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/puppies"
              className="NavBar-link btn btn-outline-danger text-danger"
            >
              PUPPIES!
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/users/pups"
              className="NavBar-link btn btn-outline-danger
              text-danger"
            >
              {" "}
              MY PUPS
            </Link>
          </Nav.Link>
          <Navbar.Text className="text-danger ml-3">
            WELCOME, {props.user.first_name.toUpperCase()}
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar bg="info" expand="lg" sticky="top">
      <Navbar.Brand>
        <Nav.Link>
          <Link to="/" className=" text-danger">
            PUPPIES FOR ALL
          </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle
        ria-controls="basic-navbar-nav"
        className="btn-outline-danger"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          <Nav.Link>
            <Link
              to="/login"
              className="NavBar-link btn btn-outline-danger text-danger"
            >
              LOG IN
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/signup"
              className="NavBar-link btn btn-outline-danger text-danger"
            >
              SIGN UP
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/puppies"
              className="NavBar-link btn btn-outline-danger text-danger"
              onClick={props.handleGetPuppies}
            >
              Puppies!
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
