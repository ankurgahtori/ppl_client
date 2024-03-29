import React from "react";
import HeaderLeft from "./comp/HeaderLeft";
import HeaderRight from "./comp/HeaderRight";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="header">
      <HeaderLeft isLoggedIn={isLoggedIn} />
      <HeaderRight isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};
export default Header;
