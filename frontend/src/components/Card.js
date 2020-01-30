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
            <div style={{'margin-top': '1em', backgroundColor: '#ccebdb'}} className={'row align-items-center'}>
                <div className={'col-9'}>
                    {this.props.card.ID} {this.props.card.DRGDefinition}
                </div>

                <div className={'col-1'} style={this.getStyle()}>
                    <button className={'btn-info btn'}>Check Price</button>
                </div>

                <div className={'col-1'} style={this.getStyle()}>
                    <button className={'btn-info btn'}>Check Hospitals</button> 
                </div>
                {/* <div id="priceModal" class="modal">
                    <div class="priceModalContent">
                        <span class="close"> </span>
                        <p>weoowooow</p>
                    </div>
                </div>  */}
            
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
