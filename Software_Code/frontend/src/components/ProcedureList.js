import React, { Component } from 'react';
import Card from './Card'
// import { watchFile } from 'fs';
// import PropTypes from 'prop-types'

class ProcedureList extends Component {
  render() {
    return this.props.procedures.map((card) => (
        <Card key={card.id} card={card} />
    ));
  }

}

// ProcedureList.propTypes = {
//   cards: PropTypes.array.isRequired
// }

export default ProcedureList;
