import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Styles = styled.div`

    .checkBtn {
        text-align: right;
        background-color: #17A2B8;
        color: white;
    }

    .modal{
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-colour: (0,0,0,0.4);
    }

    .modal-content{
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    :hover {
        background-color: #273c75;
        color: white;
		cursor: pointer;

`;

export class Card extends Component {
    
    getStyle = () => {
        return {
            padding: '0.7em',
            fontSize: '0.7em',
        }
    }

    render() {
        return (
            <Styles> 
            <div style={{'margin-bottom': '1em', 'padding':'1em', backgroundColor: '1#dcdde1', border: '1px solid'}}>
             <div style={{fontSize: '1.4em', fontweight:600}} class="row row-cols-2">
              
              <div class="col"> <b>{this.props.card.ProviderName}</b></div>
              
            </div>

            <div class="row row-cols-2">
                <div class="col">{this.props.card.DRGDefinition}</div>
            </div>

            <div class="row row-cols-2">
                <div class="col"><b>GPDID Code: </b>{this.props.card.GPDID}</div>
            </div>
                
            <div class="row row-cols-2">
                <div class="col"><b>Average Price: </b></div>
                <div class="col">${this.props.card.TotalPayments}</div>
            </div>

            <div class="row row-cols-2">
                <div class="col"><b>Distance: </b></div>
                <div class="col">256 Miles</div>
            </div>

            <div class="row row-cols-2">
                <div class="col"><b>More information: </b></div>
                <div class="col">BUTTON</div>
            </div>

        </div>
     </Styles>

        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
