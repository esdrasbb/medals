import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Header from '../header'
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/signin')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <p className="App-intro">
            <code><b>Faça login para marcar presença na aula!</b></code>
          </p>
          <div className="AppBody">
            <form className="App-form" onSubmit={this.handleSubmit}>
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
          <br />
          <br />
          <p className="App-intro">
            <code><b>ou se for primeiro acesso, <Link to="/signup">clique aqui</Link></b></code>
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
