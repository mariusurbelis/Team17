import React, { Component } from 'react';
import Card from './Card'


class ProceduresListID extends Component {
  render() {
    return this.props.proceduresid.map((card) => (
        <Card key={card.id} card={card} />
    ));
  }

}
export default ProceduresListID;
