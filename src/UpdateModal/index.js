import React from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import './UpdateModal.scss';

function UpdateModal({ show, onHide, title, message, status, confirm }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="UpdateModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {message}
        </p>
        <p>Your current status is: {status}</p>
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={onHide} variant="outline-info">No, thanks.</Button>
          <Button onClick={() => confirm("In Progress")} variant="warning">In Progress</Button>
          <Button onClick={() => confirm("Completed")} variant="success">Completed</Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateModal;