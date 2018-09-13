import React, { Component } from 'react';
import { connect } from 'react-redux'; // подключает React компонент к Redux store
import { User } from '../components/User';
import { Page } from '../components/Page';
import { setYear } from '../actions/PageActions'
import './App.css';

class App extends Component {
    render() {
        const {
            user: { name, surname, age },
            page: { year, photos },
            setYearAction
        } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                    <User name={name} surname={surname} age={age} />
                </header>
                <p className="App-intro">Здесь будут мои самые залайканые фото</p>
                <Page year={year} photos={photos} setYear={setYearAction} />
            </div>
        )
    }
}

// приклеиваем данные из store
const mapStateToProps = store => {
    console.log(store);

    return {
        user: store.user,
        page: store.page
    }
}

// прокидываем actions в контейнер
const mapDispatchToProps = dispatch => {
    console.log(dispatch);

    return {
        setYearAction: year => dispatch(setYear(year))
    }
}


// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);