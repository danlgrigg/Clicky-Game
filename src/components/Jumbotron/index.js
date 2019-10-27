import React from "react";
import "./style.css";
import Jumbotron from "react-bootstrap/Jumbotron";


function jumbotron() {
  return (
    <Jumbotron>
      <h1>Clicky Game!</h1>
      <p>
        Click an image to earn points, just don't click the same one twice!
      </p>
    </Jumbotron>
  );
}

export default jumbotron;