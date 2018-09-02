import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
    render() {
        const {name, surname, age} = this.props.user;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Top Photos</h1>
                </header>
                <p className="App-intro">
                    Here will be my top liked photos!
                </p>
                <p>
                    name: {name}, surname: {surname}, age: {age}
                </p>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);

    return {
        user: store.user
    };
};

export default connect(mapStateToProps)(App);
