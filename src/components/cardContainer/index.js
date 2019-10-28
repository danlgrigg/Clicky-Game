import React from "./node_modules/react";
import "./style.css";
import Card from "./node_modules/react-bootstrap/Cards";

const CardContainer = props => {
  return (
    <Card style={{ width: "10rem", margin: "2rem" }} 
          value={props.id}
          onClick={()=>props.handleClick(props.id)}
          >
      <Card.Img src={props.image}
                alt={props.name} 
                />
    </Card>
  );
}

export default CardContainer;
