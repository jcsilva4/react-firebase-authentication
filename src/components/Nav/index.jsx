import React from "react";
import { NavLink } from "react-router-dom";

import * as routes from "../../constants/routes";

const Nav = () => {
  return (
    <div>
      <div>React Firebase Authentication</div>
      <div>
        <NavLink to={routes.HOME}>Home</NavLink>
        <NavLink to={routes.PROFILE}>Profile</NavLink>
      </div>
    </div>
  );
};

export default Nav;
