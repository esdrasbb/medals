import React, { Component } from 'react';
import reactLogo from './react-logo.svg';

import './header.css';

class Header extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-nav">
          <span className="App-nav-title">Lista Presença - Aula Tio Braga</span>
        </div>
        <div className="App-header">
          <img src={reactLogo} className="main-logo" alt="logo" />
          <h2>Seja bem-vindo!</h2>
        </div>
      </div>
    );
  }
}

export default Header;
