import React, { Component } from 'react';
import { auth } from '../firebase';

import Header from '../header'
import './signup.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      displayErrors: false,
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true, errors: 'form is invalid!' });
      return;
    }
    this.setState({ displayErrors: false, errors: '', email: event.target.email.value, password: event.target.password.value }, function(){
      this.signUp();
    });
  }

  signUp() {
    var self = this;
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((result) => {
        this.props.history.push('/')
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        self.setState({ errors: errorCode + ' -> ' + errorMessage, displayErrors: true })
      });
  }

  render() {
    const { displayErrors } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <p className="App-intro">
            <code><b>Informe um e-mail e senha para criar seu acesso:</b></code>
          </p>
          <div className="AppBody">
            <form onSubmit={this.handleSubmit} noValidate className={displayErrors ? ['displayErrors App-form'] : 'App-form'}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <br />
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" type="password" required />
              <br />
              <br />
              <input className="button" type="submit" value="Criar acesso" />
            </form>
          </div>
        </div>
        <div className="App-form">
          <br />
          {this.state.displayErrors ? <p className="App-intro">{this.state.errors}</p> : ''}
        </div>
      </div>
    );
  }
}

export default SignUp;
