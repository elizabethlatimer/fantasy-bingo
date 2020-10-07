import React from 'react';
import BingoTile from '../BingoTile'

import { Container, Row } from 'react-bootstrap'

function Grid({ card, update }) {
  return (
    <Container className="bingoGrid">
      <Row>
        {Object.keys(card).filter(id => id <= 5).map(id => <BingoTile key={id} challenge={card[id]} />)}
      </Row>
      <Row>
        {Object.keys(card).filter(id => id > 5 && id <= 10).map(id => <BingoTile key={id} challenge={card[id]} />)}
      </Row>
      <Row>
        {Object.keys(card).filter(id => id > 10 && id <= 15).map(id => <BingoTile key={id} challenge={card[id]} />)}
      </Row>
      <Row>
        {Object.keys(card).filter(id => id > 15 && id <= 20).map(id => <BingoTile key={id} challenge={card[id]} />)}
      </Row>
      <Row>
        {Object.keys(card).filter(id => id > 20 && id <= 25).map(id => <BingoTile key={id} challenge={card[id]} />)}
      </Row>
    </Container>
  )
}

export default Grid;