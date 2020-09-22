import React, { useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase/context";

const withAuthentication = (Component) => {
  const WithAuthentication = ({ firebase, history, ...rest }) => {
    useEffect(() => {
      const onAuth = firebase.auth.onAuthStateChanged(function (user) {
        if (!user) {
          history.push("/login");
        }
      });
      return () => {
        onAuth();
      };
    });
    return <Component {...rest} />;
  };
  return compose(withRouter, withFirebase)(WithAuthentication);
};
export default withAuthentication;
