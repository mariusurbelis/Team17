import React, { Component } from 'react';
import Card from './Card'

class ProcedureList extends Component {
  render() {
    return this.props.procedures.map((card) => (
        <Card key={card.id} card={card} />
    ));
  }

}
export default ProcedureList;
