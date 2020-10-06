import React from 'react';
import BingoTile from '../BingoTile'

function Grid ({card, update}) {
  return (
    <div className="bingoGrid">
      {Object.keys(card).map(id => <BingoTile key={id} challenge={card[id]}/>)}
    </div>
  )
}

export default Grid;