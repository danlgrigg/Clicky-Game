import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar"
import Logo from "./Pac-12_logo.png"

function Header() {
  return (
    <Navbar bg="ligth" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src={Logo}
        width="80"
        height="80"
        className="d-inline-block align-top"
      />
      {' Pac-12 Clicky Game'}
    </Navbar.Brand>
    <div>
        <a class="navbar-item align-center">Click an Image to Play!
        </a>
        <a class="navbar-item align-right" id="score-counter">Current Score: 0
        </a>
        <a class="navbar-item align right" id="top-score-counter">Top Score: 0
        </a>
        
        </div>
  </Navbar>

   
  );
}
export default Header;
