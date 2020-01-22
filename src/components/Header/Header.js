import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "../NavBar/NavBar";
import "./style.css";

const Header = props => {
  return (
    <>
      <AppBar className="appbar" position="static" user={props.user}>
        <Toolbar user={props.user}>
          <TypoGraphy variant="h3" color="inherit" user={props.user}>
            Puppies Rock!
          </TypoGraphy>
          <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            handleSignupOrLogin={props.handleSignupOrLogin}
            handleGetPuppies={props.handleGetPuppies}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
