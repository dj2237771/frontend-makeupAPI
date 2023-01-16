import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

function UpdateMakeupModal(props) {
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  const updateItemInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      prodName: e.target.name.value,
      prodBrand: e.target.brand.value,
      prodPrice: e.target.price.value,
      prodImage: e.target.image.value,
      prodDisruption: e.target.disruption.value,
    };
    const resultsUpdate = await axios.put(
      `${serverLink}/product/${props.itemIndex}`,
      itemData
    );
    props.handleClose();
    props.updateMakeups(resultsUpdate.data);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateItemInfo}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.prodName}
              type="text"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.prodBrand}
              type="text"
              name="brand"
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.prodPrice}
              type="number"
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.prodImage}
              type="text"
              name="image"
            />
          </Form.Group>
          <Form.Group controlId="disruption">
            <Form.Label>Product disruption</Form.Label>
            <Form.Control
              defaultValue={props.itemInfo.prodDisruption}
              type="text"
              name="disruption"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Item
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdateMakeupModal;
