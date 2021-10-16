import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from './common/Nav';
import Home from './layout/home/Home.js';

export default function Routes() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/' exact={true}>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}