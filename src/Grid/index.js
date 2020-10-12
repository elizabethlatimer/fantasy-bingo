import React from 'react';
import BingoTile from '../BingoTile'
import './Grid.scss';

import { CardGroup } from 'react-bootstrap'

function Grid({ card }) {
  return (
    <>
    <h1>r/Fantasy SFF Bingo 2020</h1>
    <p>Fantasy Book Bingo is a yearly reading challenge within the r/fantasy community. Its one-year mission: to explore strange new worlds, to seek out authors and books, to boldly go where few readers have gone before....(okay, a lot of us have gone here by now, just roll with it!)</p>

    <div className="bingoGrid">
      <CardGroup>
        {Object.keys(card).filter(id => id <= 5).map(id => <BingoTile key={id}  id={id} challenge={card[id]} />)}
      </CardGroup>
      <CardGroup>
        {Object.keys(card).filter(id => id > 5 && id <= 10).map(id => <BingoTile key={id} id={id} challenge={card[id]} />)}
      </CardGroup>
      <CardGroup>
        {Object.keys(card).filter(id => id > 10 && id <= 15).map(id => <BingoTile key={id} id={id} challenge={card[id]} />)}
      </CardGroup>
      <CardGroup>
        {Object.keys(card).filter(id => id > 15 && id <= 20).map(id => <BingoTile key={id} id={id} challenge={card[id]} />)}
      </CardGroup>
      <CardGroup>
        {Object.keys(card).filter(id => id > 20 && id <= 25).map(id => <BingoTile key={id} id={id} challenge={card[id]} />)}
      </CardGroup>
    </div>
    </>
  )
}

export default Grid;