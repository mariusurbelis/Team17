import React from 'react';
import styled from 'styled-components';
import HospitalSearchBar from './HospitalSearchBar';

const state = "MO"
const startLocation = {lat: 38.6545, lng: -90.3117}
const Styles = styled.div`
    h1{
        color: grey;
    }

    .PageTitle{
        padding-top: 10px;
        padding-bottom: 10px;
    }

    hr{
        border: 1px solid grey;

    }
`;

// <HospitalsMap hospList={locations} hi={"40vh"} wi={"40vw"}/>
export const HospitalsSelection = (props) => (
    <Styles>
        <h1 class = "PageTitle"> Hospitals In Your Local Area </h1>
        <hr></hr>
        <HospitalSearchBar></HospitalSearchBar>
    </Styles>
)   

//        <Row>
{/* <HospitalSearchBar/>
//<Col>
//<HospitalSelectionPanel startLocation={startLocation} stater={state} left={true}/> 
//</Col>
//<Col>
 // <HospitalSelectionPanel left={false}/>
 //   {/* <p>Loading...</p> */}
//</Col>
//</Row> */}
