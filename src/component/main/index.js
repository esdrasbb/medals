import React, { Component } from 'react';
import Header from '../header'
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <p className="App-intro">
            <code><b>Clique no botão abaixo para marcar sua presença na aula!</b></code>
          </p>
          <div className="AppBody">
            <form className="App-form" onSubmit={this.handleSubmit}>
              <input className="button" type="submit" value="Lista Presença" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
