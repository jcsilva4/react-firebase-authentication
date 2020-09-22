import React, { useEffect, useState } from "react";
import FirebaseContext, { withFirebase } from "../../components/Firebase/context";
import { withRouter } from "react-router-dom";
import { compose } from 'recompose'
const Login = ({ history, firebase }) => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth.getRedirectResult().then((result) => {
      if (result.credential) {
        history.push("/")
      } else {
        setLoading(false)
      }
    });
  })
  return (
    <div className="Login">
      {isLoading ?
        <div>Loading ...</div> :
        (<>
          <h1 className="LoginTitle">React with Firebase Login</h1>
          <FirebaseContext.Consumer>
            {(firebase) => {
              return (
                <button
                  className="LoginButton"
                  onClick={() => {
                    firebase
                      .signInWithGoogle()
                      .then((result) => history.push("/"))
                      .catch((error) => alert("Login error"));
                  }}
                >
                  Login With Google
                </button>
              );
            }}
          </FirebaseContext.Consumer>
        </>)}
    </div>
  );
};

export default compose(withRouter, withFirebase)(Login);
