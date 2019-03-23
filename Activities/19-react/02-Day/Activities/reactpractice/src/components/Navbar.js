import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "flex-end"
  }
};

const Navbar = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a href="/">Welcome</a>
  </nav>
);

export default Navbar;
