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
            fontSize: '1em',
            backgroundColor: '#ccebdb'
        }
    }

    
    
    render() {
        return (
            <Styles> 
            <div style={{'margin-top': '1em'}} className={'row'}>
                <div className={'col-12'} style={this.getStyle()}><button style={{'margin-right': '1em'}} className={'btn-lg btn btn-info'}>{this.props.card.ID}</button> {this.props.card.DRGDefinition}
                <button className={'checkBtn'}>Check Price</button> <button className={'checkBtn'}> Check Hospitals</button> 
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
