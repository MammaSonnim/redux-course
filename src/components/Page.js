import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {
    render() {
        const { photos, year } = this.props.page;

        return (
            <p>У тебя {photos.length} фото в {year} году</p>
        )
    }
}

Page.propTypes = {
    page: PropTypes.shape({
        photos: PropTypes.array,
        year: PropTypes.number
    })
}