import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h3" color="inherit">
            Puppies Rock!
          </TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      ;
    </>
  );
};

export default Header;
