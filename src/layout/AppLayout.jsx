import React from "react";
import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="Main">{children}</main>
    </div>
  );
};

export default Layout;
