import React from "react";
import withAuthentication from "../../components/Authentication/withAuthentication";

const Profile = () => {
  return <div className="PageTitle">Profile</div>;
};

export default withAuthentication(Profile);
