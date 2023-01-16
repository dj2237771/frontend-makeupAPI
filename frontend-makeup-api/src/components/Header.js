import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import React from "react";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Makeup</Navbar.Brand>
      <Link
        to="/"
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        Favorites Makeup
      </Link>
      <Link to="/getAPIData">All Makeup</Link>
    </Navbar>
  );
}
export default Header;
