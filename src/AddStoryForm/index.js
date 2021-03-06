import React, { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';

import '../ChallengeDetail/ChallengeDetail.scss'

const INITIAL_STATE = {
  "title": "",
  "author": "",
  "startedDate": "",
  "finishedDate": "",
  "notes": "",
  "mode": "Normal"
}

function AddStoryForm({ card, update, id, toggle, story, openModal }) {
  const [formData, setFormData] = useState(story || INITIAL_STATE);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let newCard = { ...card };
    newCard[id].stories[formData.title] = formData;
    if (story && formData.title !== story.title) delete newCard[id].stories[story.title];
    update(newCard);
    openModal();
    toggle();
  }

  return (
    <>
      <Form className="ChallengeDetailForm" onSubmit={handleSubmit}>
        <div className="FormHeader">
          <h2>{story ? 'Edit' : 'New'} Title</h2>
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
        <div className="button">
          <ButtonGroup>
            <Button size='sm' variant='secondary' onClick={() => toggle()}>Cancel</Button>
            <Button size='sm' onClick={handleSubmit}>Submit</Button>
          </ButtonGroup>
        </div>
      </Form>
    </>
  )
}

export default AddStoryForm;