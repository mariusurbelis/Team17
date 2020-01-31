import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import HospitalSelectionPanel from './HospitalSelectionPanel';
import HospitalsMap from './HospitalsMap';


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
const stateNeeded="TX"

export class ProvCard extends Component {

    getStyle = () => {
        return {
            padding: '0.7em',
            fontSize: '0.7em',
        }
    }

    
    //<HospitalsMap hospList={this.props.locations} hi={"90vh"} wi={"90vw"}/>    
    render() {

        if(this.props.card.State==stateNeeded){
            if(this.props.card.ID==30001){
                return(
                <div>
                    Grow up
                </div>
            )}
            return (
                <Styles> 
                <div style={{'margin-top': '1em', backgroundColor: '#ccebdb'}} className={'row align-items-center'}>
                    <div className={'col-9'} style={{'padding-top':'1em'}}>
                        <p>{this.props.card.ProviderName}</p>
                        <p>{this.props.card.Address}, {this.props.card.State}</p>
                    </div>

                    <div className={'col-1'} style={this.getStyle()}>
                        <button className={'btn-info btn'}>P</button>
                    </div>

                    <div className={'col-1'} style={this.getStyle()}>
                        <button className={'btn-info btn'}>H</button> 
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
        }else{
            return (<div></div>)
        }
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
ProvCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default ProvCard
