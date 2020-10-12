import React from 'react';
import {Card} from 'react-bootstrap';

function StoryInfo ({story}) {
  return (
    <Card>
      <Card.Title>{story.title}</Card.Title>
      <Card.Text>Author: {story.author}</Card.Text>
      <Card.Text>Date Started: {story.startedDate}</Card.Text>
      <Card.Text>Date Finished: {story.finishedDate}</Card.Text>
      <Card.Text>My thoughts: {story.notes}</Card.Text>
      <Card.Text>Mode: {story.mode}</Card.Text>
    </Card>
  )
}

export default StoryInfo;