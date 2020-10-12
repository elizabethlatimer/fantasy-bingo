import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './BingoTile.scss';

function BingoTile({ challenge, id }) {

  let mode = challenge.difficulty;
  let status = challenge.status
  let bgColor;

  if (status === "Not Started") {
    bgColor = "info";
  } else if (status === "In Progress") {
    bgColor = "warning";
  } else {
    bgColor = "success";
  }

  return (
    <Card
      bg={bgColor}
      text="light"
      className="BingoTile">
      <Card.Body>
        <Card.Title className="BingoTitle">{challenge.title}</Card.Title>
        <Card.Text className="BingoStatus">{`${challenge.status} ${mode === 'hard' && challenge.status !== "Not Started" ? ' - HARD MODE' : ''}`}</Card.Text>

      </Card.Body>
      <Card.Footer>
        <Link to={`/challenge/${id}`} className="btn btn-sm btn-secondary gridButton"> Update progress</Link>
      </Card.Footer>
    </Card>
  )
}

export default BingoTile;