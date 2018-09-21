import React, { Component } from 'react';
import { auth } from '../firebase';

import Header from '../header'
import './signin.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ email: event.target.email.value, password: event.target.password.value, errors: '' }, function () {
      this.signIn();
    });
  }

  // Auth Events
  signIn() {
    var self = this;
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((result) => {
      this.props.history.push({
        pathname: "/success/" + result.email,
        state: { user: result.email }
      })
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      self.setState({ errors: errorCode + ' -> ' + errorMessage })
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          <p className="App-intro">
            <code><b>Informe seu e-mail e senha para acesso</b></code>
          </p>
          <div className="AppBody">
            <form className="App-form" onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" type="password" required />
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
        </div>
        <div className="App-form">
          <br />
          <p className="App-intro">{this.state.errors}</p>
        </div>
      </div>
    );
  }
}

export default SignIn;
