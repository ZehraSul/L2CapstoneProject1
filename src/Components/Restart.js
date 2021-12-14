import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Win from "../images/Win.png";

/* Creates a modal to dislpay winning msg to the user when the board is cleared i.e the user wins the game. Contains button to start a new game */

const Restart = ({ handleRestart, showModal }) => {
  return (
    <Modal show={showModal}>
      <Modal.Title style={{ paddingLeft: "20px", paddingTop: "15px" }}>
        You win!
      </Modal.Title>
      <Modal.Body>
        <p style={{ padding: "5px", textAlign: "center" }}>
          <img
            src={Win}
            style={{ width: "100px", height: "100px" }}
            alt="Win"
          />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleRestart} color="primary">
          Restart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Restart;
