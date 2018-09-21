import React, { Component } from 'react';
import { auth, database } from '../firebase';
import { Link } from 'react-router-dom'

import Header from '../header'

class Success extends Component {
    constructor(props) {
        super(props);

        this.showCurrentDate = this.showCurrentDate.bind(this);
    }

    showCurrentDate() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return (date + '-' + month + '-' + year);
    }

    componentWillMount() {
        var uid = auth.currentUser.uid;
        let email = this.props.match.params.user;
        let currentDate = this.showCurrentDate();
        database.ref('Users/').child(uid).set({
            email,
            currentDate
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
        auth.signOut()
            .then(() => {
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="App">
                    <p className="App-intro">
                        <code><b>Aluno: {this.props.match.params.user}</b></code>
                    </p>
                    <p className="App-intro">
                        <code><b>Presença registrada com sucesso em: {this.showCurrentDate()}</b></code>
                    </p>
                    <br />
                    <br />
                    <p className="App-intro">
                        <code><b><Link to="/">clique aqui para voltar</Link></b></code>
                    </p>
                </div>
            </div>
        );
    }
}

export default Success;
