import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
    render() {
        const { name, surname, age } = this.props;

        return (
            <p>Привет, {name} {surname}! Тебе {age}</p>
        )
    }
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string,
        age: PropTypes.number
    })
}