import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { BINGO_CARD } from './BlankBingoState';
import Grid from './Grid';
import ChallengeDetail from './ChallengeDetail';


function Routes() {
  const [bingoCard, setBingoCard] = useState(BINGO_CARD);

  useEffect(() => {
    let card = localStorage.getItem('bingoCard');
    if (card) setBingoCard(card);
  }, [])


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Grid card={bingoCard} update={setBingoCard} />
        </Route>
        <Route exact path="/challenge/:id">
          <ChallengeDetail card={bingoCard} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;