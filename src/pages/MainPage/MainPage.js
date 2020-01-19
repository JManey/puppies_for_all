import React from "react";
// import PuppyCard from "../../components/PuppyCard/PuppyCard";
import Header from "../../components/Header/Header";

const MainPage = props => {
  return (
    <Header
      user={props.user}
      handleLogout={props.handleLogout}
      handleSignupOrLogin={props.handleSignupOrLogin}
    />
  );
};

export default MainPage;
