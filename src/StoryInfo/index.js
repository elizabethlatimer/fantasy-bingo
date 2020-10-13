import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import AddStoryForm from '../AddStoryForm';
import './StoryInfo.scss';

function StoryInfo({ card, id, update, story, deleteStory }) {
  const [edit, setEdit] = useState(false);
  if (edit) {
    return <AddStoryForm card={card} update={update} id={id} toggle={() => setEdit(false)} story={story} />
  }

  return (
    <Card className="StoryInfoCard">
      <Card.Title>{story.title}</Card.Title>
      <Card.Text>Author: {story.author}</Card.Text>
      <Card.Text>Date Started: {story.startedDate}</Card.Text>
      <Card.Text>Date Finished: {story.finishedDate}</Card.Text>
      <Card.Text>My thoughts: {story.notes}</Card.Text>
      <Card.Text>Mode: {story.mode}</Card.Text>
      <div className="buttons">
        <ButtonGroup>
          <Button size="sm" variant='secondary' onClick={() => setEdit(true)}>Edit</Button>
          <Button size="sm" variant='primary' onClick={() => deleteStory(story.title)}>Delete</Button>
        </ButtonGroup>
      </div>
    </Card>
  )
}

export default StoryInfo;