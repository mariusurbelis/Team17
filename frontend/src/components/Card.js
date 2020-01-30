import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';


const Styles = styled.div`

    .checkBtn {
        position: relative;
        text-align: center;
        background-color: #17A2B8;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 10px;
        margin-right: 30px;
        right: -800px;
        bottom: 40px;
    }

`;

export class Card extends Component {
    
    getStyle = () => {
        return {
            padding: '0.7em',
            fontSize: '1em',
            backgroundColor: '#ccebdb'
        }
    }

    
    
    render() {
        return (
            <div style={{'margin-top': '1em'}} className={'row'}>
                <div className={'col-12'} style={this.getStyle()}><button style={{'margin-right': '1em'}} className={'btn-lg btn btn-info'}>{this.props.card.ID}</button> {this.props.card.DRGDefinition}
                <Styles> <button className={'checkBtn'}>Check Price</button> <button className={'checkBtn'}> Check Hospitals</button> </Styles>
                 </div>
            </div>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
