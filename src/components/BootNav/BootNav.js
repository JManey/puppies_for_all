import React from "react";
import { render } from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";
import "./index.css";

const BootNav = () => (
  <div>
    <div className="center-navbar">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey="a" href="#">
              Link1
            </NavItem>

            <NavItem eventKey="b" href="#">
              Link2
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    <h2 style={{ textAlign: "center" }}>This is some text</h2>
  </div>
);

export default BootNav;
