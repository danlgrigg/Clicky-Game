import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar"
import Logo from "./Pac-12_logo.png"

const Header = props => {
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
        <a class="navbar-item justify-content-center">Click an Image to Play!
        </a>
        <a class="navbar-item justify-content-end" id="score-counter">Current Score: {props.score}
        </a>
        <a class="navbar-item justify-content-end" id="top-score-counter">Top Score: {props.topScore}
        </a>
        </div> 
  </Navbar>

   
  );
}
export default Header;
