import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharactersPage from '../pages/CharactersPage';
import CharactersDetailsPage from '../pages/CharactersDetailsPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CharactersPage />
      </Route>
      <Route exact path="/details/:index">
        <CharactersDetailsPage />
      </Route>
    </Switch>
  );
};

export default Router;
