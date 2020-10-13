import React from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

function WarningModal({ show, onHide, title, message, confirm }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
      </Modal.Body>
      <Modal.Footer>
        <ButtonGroup>
          <Button onClick={onHide} variant="outline-secondary">Cancel</Button>
          <Button onClick={confirm} variant="info">Confirm</Button>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  )
}

export default WarningModal;