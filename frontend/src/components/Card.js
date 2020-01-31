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

            <div style={{'margin-top': '1em', 'padding':'1em', backgroundColor: '#0b9cdb26'}} className={'row align-items-center'}>
                <div className={'col-12'}>
                    
                    <div className={'row'}>
                        <div style={{fontSize: '1.4em'}} className={'col-12'}>
                            {this.props.card.DRGDefinition}
                        </div>
                    </div>

                    <div style={{fontSize: '1em'}}  className={'row'}>
                        <div className={'col-12'}>
                            GPDID: {this.props.card.GPDID}
                        </div>
                    </div>

                    <div style={{'margin-top':'1em'}} className={'row'}>
                        <div className={'col-8'}>
                            {this.props.card.ProviderName}
                        </div>
                        <div className={'col-4 text-center'}>
                            ${this.props.card.TotalPayments}
                        </div>
                    </div>

                </div>
            </div>

            </Styles>
        )
    }
}

// var modal = document.getElementById("myModal");

// var checkBtn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// checkBtn.onclick = function(){
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event){
//     if(event.target === modal){
//         modal.style.display = "none";
//     }
// }
Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
