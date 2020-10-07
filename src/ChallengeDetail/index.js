import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { Button, Form, Alert } from 'react-bootstrap'

const INITIAL_STATE = {
  "difficulty": "Normal",
  "status": "Not Started"
}

function ChallengeDetail({ card, update }) {
  let { id } = useParams();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [showAlert, setShowAlert] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let newCard = { ...card };
    newCard[id].difficulty = formData.difficulty;
    newCard[id].status = formData.status;
    update(newCard)
    setShowAlert(true);
  }

  return (
    <>
      <h1>{card[id].title}</h1>
      <div>{card[id].description}</div>
      {showAlert ? <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        You have successfully updated your progress on this challenge!
      </Alert> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Difficulty">
          <Form.Label>Which mode?</Form.Label>
          <Form.Control as="select" size="sm" name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option>Normal</option>
            <option>Hard</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="Status">
          <Form.Label>Square Status</Form.Label>
          <Form.Control as="select" size="sm" name="status" value={formData.status} onChange={handleChange}>
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </Form.Control>
        </Form.Group>
        <Button size='sm' onClick={handleSubmit}>Update Progress</Button>
      </Form>
      <Button size='sm'>Add a Book/Story</Button>
      <Link to='/' className='btn btn-sm btn-secondary'>Back to Bingo Grid</Link>
    </>
  )

}

export default ChallengeDetail;