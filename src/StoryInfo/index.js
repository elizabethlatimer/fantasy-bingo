import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import AddStoryForm from '../AddStoryForm';
import './StoryInfo.scss';

function StoryInfo({ card, id, update, story, deleteStory, showModal }) {
  const [edit, setEdit] = useState(false);
  if (edit) {
    return (<div className="StoryInfoEdit">
    <AddStoryForm
      card={card}
      update={update}
      id={id}
      toggle={() => setEdit(false)}
      story={story}
      openModal={showModal}
      />
      </div>)
  }

  return (
    <Card className="StoryInfoCard">
      <Card.Title><span className="label">{story.title}</span></Card.Title>
      <Card.Text><span className="label">Author:</span> {story.author}</Card.Text>
      <Card.Text><span className="label">Date Started:</span> {story.startedDate}</Card.Text>
      <Card.Text><span className="label">Date Finished:</span> {story.finishedDate}</Card.Text>
      <Card.Text><span className="label">My thoughts:</span> {story.notes}</Card.Text>
      <Card.Text><span className="label">Mode:</span> {story.mode}</Card.Text>
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