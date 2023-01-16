import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React from "react";

function Item(props) {
  const [serverLink, setserverLink] = useState(process.env.REACT_APP_SERVER);

  const addToFav = async (makeup) => {
    await axios.post(`${serverLink}/product`, makeup);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.prodImage} />
      <Card.Body>
        <Card.Title>{props.item.prodName}</Card.Title>
        <Card.Text>{props.item.prodBrand}</Card.Text>
        <Card.Text>{props.item.prodPrice}</Card.Text>
        <Card.Text>{props.item.prodDisruption}</Card.Text>

        <Button
          variant="primary"
          onClick={() => {
            addToFav(props.item);
          }}
        >
          ADD FAV
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
