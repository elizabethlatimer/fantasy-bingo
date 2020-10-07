import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
    <Card className="col-md-2 col-lg-2 col-xl-2 py-2"
      bg={bgColor}
      text="light">
      <Card.Title>{challenge.title}</Card.Title>
      <Card.Text>{`${challenge.status} ${mode === 'hard' && challenge.status !== "Not Started" ? ' - HARD MODE': ''}`}</Card.Text>
      <Link to={`/challenge/${id}`} className="btn btn-sm btn-secondary"> Update progress</Link>
    </Card>
  )
}

export default BingoTile;