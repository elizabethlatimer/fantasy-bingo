import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import AddStoryForm from '../AddStoryForm';
import StoryInfo from '../StoryInfo';


function ChallengeDetail({ card, update }) {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    "difficulty": card[id].difficulty,
    "status": card[id].status
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);

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

  const toggleForm = () => {
    setShowForm(showForm => !showForm)
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

      {card[id].stories.length
        ? card[id].stories.map(story => <StoryInfo story={story} key={story.title} />)
        : <p>You haven't recorded a title for this challenge yet.</p>}

      {showForm
        ? <AddStoryForm card={card} update={update} id={id} toggle={toggleForm} />
        : <Button size='sm' onClick={toggleForm}>Add a Book/Story</Button>}

      <Link to='/' className='btn btn-sm btn-secondary'>Back to Bingo Grid</Link>
    </>
  )

}

export default ChallengeDetail;