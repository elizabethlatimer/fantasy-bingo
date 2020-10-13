import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import AddStoryForm from '../AddStoryForm';
import StoryInfo from '../StoryInfo';
import './ChallengeDetail.scss';


function ChallengeDetail({ card, update }) {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    "difficulty": card[id].difficulty,
    "status": card[id].status
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const storyList = card[id].stories

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

  const handleDelete = (title) => {
    let newCard = { ...card };
    delete newCard[id].stories[title];
    update(newCard);
  }

  const toggleForm = () => {
    setShowForm(showForm => !showForm)
  }

  return (
    <div className="ChallengeDetail text-dark">
      <div className="ChallengeDetailHeader">
        <h1>{card[id].title}</h1>
        <div>{card[id].description}</div>
      </div>
      {showAlert ? <Alert variant="primary" onClose={() => setShowAlert(false)} dismissible>
        You have successfully updated your progress on this challenge!
      </Alert> : null}
      <Form className="ChallengeDetailForm" onSubmit={handleSubmit}>
        <div className="FormHeader">
          <h2>Update this bingo square</h2>
        </div>
        <Form.Group controlId="Difficulty">
          <Form.Label>Which mode is your book?</Form.Label>
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
        <div className="button">
          <Button size='sm' onClick={handleSubmit}>Update Progress</Button>
        </div>
      </Form>
      <div className="ChallengeDetailTitles">
        <h2>Your Choices for this Square</h2>
        {Object.keys(storyList).length
          ? Object.keys(storyList).map(title => <StoryInfo
            card={card}
            id={id}
            update={update}
            story={storyList[title]}
            key={storyList[title].title}
            deleteStory={handleDelete} />)
          : null}

        {showForm
          ? <AddStoryForm card={card} update={update} id={id} toggle={toggleForm} />
          : <div>{!Object.keys(card[id].stories).length ? <p>You haven't recorded a title for this challenge yet.</p> : null}<Button size='sm' onClick={toggleForm}>Add a Book/Story</Button></div>}
      </div>

      <Link to='/' className='btn btn-sm btn-secondary'>Back to Bingo Grid</Link>
    </div>
  )

}

export default ChallengeDetail;