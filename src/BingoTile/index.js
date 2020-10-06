import React from 'react';
import {Card} from 'react-bootstrap'

function BingoTile ({challenge}) {
  return (
    <Card>
      <Card.Title>{challenge.title}</Card.Title>
    </Card>
  )
}

export default BingoTile;