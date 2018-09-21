import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

import Main from './component/main';
import SignUp from './component/signup';
import SignIn from './component/signin';
import Success from './component/success';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/signup" exact={true} component={SignUp} />
      <Route path="/signin" exact={true} component={SignIn} />
      <Route path="/success/:user" exact={true} component={Success} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
