import React from "react";
import FirebaseContext from "../../components/Firebase/context";
import { withRouter } from "react-router-dom";
const Login = ({ history }) => {
  return (
    <div>
      <h1>Login</h1>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return (
            <button
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
    </div>
  );
};

export default withRouter(Login);
