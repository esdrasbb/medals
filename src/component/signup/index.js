import React, { Component } from 'react';
import { database } from '../firebase';

import Header from '../header'
import './signup.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      students: [],
      studentId: '',
      displayErrors: false,
      errors: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let self = this;
    database.ref('students/').on("value", function (snapshot) {
      let students = []
      if (snapshot.numChildren() > 0) {
        students = new Map(Object.entries(snapshot.val()))
      }
      self.setState({ loaded: true, students: students });
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true, errors: 'Você não selecionou seu nome!' });
      return;
    }
    this.setState({ displayErrors: false, errors: '', studentId: event.target.student.value }, function () {
      this.save();
    });
  }

  showCurrentDate() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return (date + '-' + month + '-' + year);
  }

  save() {
    const students = this.state.students;
    const studentId = this.state.studentId;
    const studentName = students.get(studentId);
    let currentDate = this.showCurrentDate();
    database.ref('classes/').child(studentId).set({
      currentDate
    }).then((result) => {
      this.props.history.push({
        pathname: "/success/" + studentId,
        state: { userName: studentName }
      })
    }).catch((error) => {
      console.log('error ', error)
    })
  }

  handleStudents() {
    const students = this.state.students;
    let radios = [];
    students.forEach((value, key) => {
      radios.push(
        <div key={key}>
          <input
            type="radio"
            name="student"
            data-id={key}
            id={key}
            value={key}
            required
          />
          <label htmlFor={key}>{value}</label>
        </div>
      )
    });
    return radios;
  }

  render() {
    const { displayErrors, loaded } = this.state;
    if (!loaded) {
      return (<div />)
    }

    return (
      <div>
        <Header />
        <div className="App">
          <p className="App-intro">
            <code><b>Selecione seu nome e confirme a presença:</b></code>
          </p>
          <div className="AppBody">
            <form onSubmit={this.handleSubmit} noValidate className={displayErrors ? ['displayErrors App-form'] : 'App-form'}>
              {this.handleStudents()}
              <br />
              <br />
              <input className="button" type="submit" value="Salvar" />
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