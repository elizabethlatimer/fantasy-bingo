import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { BINGO_CARD } from './BlankBingoState';
import Grid from './Grid';
import ChallengeDetail from './ChallengeDetail';


function Routes() {
  const [bingoCard, setBingoCard] = useState(BINGO_CARD);

  useEffect(() => {
    let cardJSON = localStorage.getItem('bingoCard');
    if (cardJSON) {
      let card = JSON.parse(cardJSON);
      setBingoCard(card);
    }
  }, [])

  const updateCard = (cardInfo) => {
    let updatedCard = JSON.stringify(cardInfo)
    localStorage.setItem('bingoCard', updatedCard)
    setBingoCard(bingoCard => cardInfo)
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Grid card={bingoCard} />
        </Route>
        <Route exact path="/challenge/:id">
          <ChallengeDetail card={bingoCard} update={updateCard} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;