import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
    
    getStyle = () => {
        return {
            padding: '0.7em',
            width: '90%',
            margin: '0.5em',
            fontSize: '1.2em',
            backgroundColor: '#ccebdb'
        }
    }
    
    render() {
        return (
            <p style={this.getStyle()} >{ this.props.card.english }</p>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
