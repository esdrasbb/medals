import React, { Component } from 'react';

import Header from '../header'
import './signin.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newData, currentUser } = this.state;
    this.guidesRef.push({
      uid: currentUser.uid,
      content: newData
    });
  }

  // Auth Events
  signIn() {
    // auth.createUserWithEmailAndPassword('email@email.com', 'password').catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    // });

    // auth.signInWithPopup(googleAuthProvider);
  }

  signOut() {
    // auth.signOut();
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
              Email: <input type="email" name="email" />
              Senha: <input type="password" name="password" />
              <input className="button" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
