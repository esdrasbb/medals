import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { messaging } from './component/firebase';

import './index.css';

import Main from './component/main';
import SignUp from './component/signup';
import SignIn from './component/signin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/signup" exact={true} component={SignUp} />
      <Route path="/signin" exact={true} component={SignIn} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// logging our messaging notification
messaging.onMessage(payload => {
  console.log(payload);
})
