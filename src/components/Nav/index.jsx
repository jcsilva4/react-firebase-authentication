import React from "react";
import { NavLink } from "react-router-dom";
import { withFirebase } from "../Firebase/context";

import * as routes from "../../constants/routes";

const Nav = ({ firebase }) => {
  return (
    <div className="Nav">
      <div>React Firebase Authentication</div>
      <div className="Navigation">
        <div>
          <NavLink className="NavLink" to={routes.HOME}>Home</NavLink>
          <NavLink className="NavLink" to={routes.PROFILE}>Profile</NavLink>
        </div>
        <div>
          <button className="LogOutButton" onClick={() => firebase.signOut()}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(Nav);
