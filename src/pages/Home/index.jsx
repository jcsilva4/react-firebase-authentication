import React from "react";
import withAuthentication from "../../components/Authentication/withAuthentication";
const Home = () => {
  return <div className="PageTitle">Home Page</div>;
};

export default withAuthentication(Home);
