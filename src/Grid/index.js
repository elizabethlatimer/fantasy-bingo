import React, { useState } from 'react';
import BingoTile from '../BingoTile';
import WarningModal from '../WarningModal';
import './Grid.scss';

import { CardGroup, Button } from 'react-bootstrap'

function Grid({ card, reset }) {
  const [showModal, setShowModal] = useState(false);

  const handleReset = () => {
    reset();
    setShowModal(false);
  }

  return (
    <>
      <div className="BingoHeader text-dark">
        <h1>r/Fantasy SFF Bingo 2020</h1>
        <p>
          Fantasy Book Bingo is a yearly reading challenge within Reddit's r/fantasy community. If you
          want to learn more about the challenge, everything you need to know can be found in the challenge
          thread <a href='https://www.reddit.com/r/Fantasy/comments/ft254j/official_rfantasy_2020_book_bingo_challenge/'>here</a>.
          </p>
        <h3>How to Use This Tracker</h3>
        <p>To get started, choose a challenge square and click to update your progress. There you will
        be able to see the description of the challenge, update your progress, and keep track of what books or
        stories you're using to complete that square.
        </p>
        <p>  This tracker utilizes the storage on your browser, so you'll want to access it from the
        same device each time and make sure you aren't in incognito mode.
          </p>

      </div>

      <div className="bingoGrid">
        <CardGroup>
          {Object.keys(card).filter(id => id <= 5).map(id => <BingoTile key={id} id={id} challenge={card[id]} />)}
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
        <Button variant="info" onClick={() => setShowModal(true)}>
          Reset Bingo Card</Button>

        <WarningModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title="Are you sure?"
          message="This will permanently delete all saved progress and title details."
          confirm={handleReset}
        />
    </>
  )
}

export default Grid;