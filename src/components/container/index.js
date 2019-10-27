import React from "react";
import "./style.css";
import Card from "react-bootstrap/Cards";

function Container() {
  return (
    <Card style={{ width: "10rem", margin: "2rem" }}>
      <Card.Img src={props.children} />
    </Card>
  );
}

export default Container;
