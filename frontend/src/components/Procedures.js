import React, { Component } from 'react';
import Card from './Card'
import PropTypes from 'prop-types'

class Flashcard extends Component {

  render() {
    return this.props.flashcards.map((card) => (
      <Card key={card.id} card={card} />
    ));
  }

}

Flashcard.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Flashcard;
