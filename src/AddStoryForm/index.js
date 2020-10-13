import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../ChallengeDetail/ChallengeDetail.scss'

const INITIAL_STATE = {
  "title": "",
  "author": "",
  "startedDate": "",
  "finishedDate": "",
  "notes": "",
  "mode": "Normal"
}

function AddStoryForm({ card, update, id, toggle }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let newCard = { ...card };
    newCard[id].stories.push(formData);
    update(newCard)
    toggle();
  }

  return (
    <Form className="ChallengeDetailForm" onSubmit={handleSubmit}>
      <div className="FormHeader">
        <h2>New Story</h2>
      </div>
      <Form.Group controlId="Title">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" size="sm" name="title" value={formData.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="Author">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" size="sm" name="author" value={formData.author} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="DateStarted">
        <Form.Label>Date Started:</Form.Label>
        <Form.Control type="date" size="sm" name="startedDate" value={formData.startedDate} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="DateFinished">
        <Form.Label>Date Finished:</Form.Label>
        <Form.Control type="date" size="sm" name="finishedDate" value={formData.finishedDate} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="Notes">
        <Form.Label>Thoughts:</Form.Label>
        <Form.Control type="textarea" size="sm" name="notes" value={formData.notes} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="Difficulty">
        <Form.Label>Which mode?</Form.Label>
        <Form.Control as="select" size="sm" name="mode" value={formData.mode} onChange={handleChange}>
          <option>Normal</option>
          <option>Hard</option>
        </Form.Control>
      </Form.Group>
      <Button size='sm' onClick={handleSubmit}>Add Story</Button>
      <Button size='sm' variant='secondary' onClick={() => toggle()}>Cancel</Button>
    </Form>
  )
}

export default AddStoryForm;