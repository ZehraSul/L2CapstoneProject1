import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/* Creating a modal to dislpay information to the user when the help button is clicked */

const Help = ({ handleClose, showHelpModal }) => {
  return (
    <Modal show={showHelpModal}>
      <Modal.Title style={{ paddingLeft: "20px", paddingTop: "15px" }}>
        Instructions
      </Modal.Title>
      <Modal.Body>
        <p style={{ padding: "5px" }}>
          Pick a card to reveal it's image, pick a 2nd card and if the images
          match the cards will disappear from the board. The aim of the game is
          to clear all the cards. Good luck!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Help;
