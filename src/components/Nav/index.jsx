import React from "react";
import { NavLink } from "react-router-dom";
import { withFirebase } from "../Firebase/context";

import * as routes from "../../constants/routes";

const Nav = ({ firebase }) => {
  return (
    <div>
      <div>React Firebase Authentication</div>
      <div>
        <NavLink to={routes.HOME}>Home</NavLink>
        <NavLink to={routes.PROFILE}>Profile</NavLink>
      </div>
      <div>
        <button onClick={() => firebase.signOut()}>Log Out</button>
      </div>
    </div>
  );
};

export default withFirebase(Nav);
