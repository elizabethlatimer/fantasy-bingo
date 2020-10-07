import React from 'react';
import {Card} from 'react-bootstrap'

function BingoTile ({challenge}) {
  return (
    <Card className="col-md-2 col-lg-2 col-xl-2 py-2">
      <Card.Title>{challenge.title}</Card.Title>
    </Card>
  )
}

export default BingoTile;