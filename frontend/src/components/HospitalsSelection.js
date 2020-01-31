import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import HospitalsMap from '../components/HospitalsMap';
import HospitalSelectionPanel from './HospitalSelectionPanel';




// const con = mysql.createConnection({
// 	host: "urbelis.dev",
// 	user: "adminrootusername",
// 	password: "adminrootpassword",
// 	database: "agile"
// });

// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("connected!")

// 	con.query("SELECT * FROM GPD", function (err, result, fields) {
//     if (err) throw err;
//     res = result;
//     console.log(result);
//   	});
// });

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
        <Row>
            <Col>
            <HospitalSelectionPanel left={true}/> 
            </Col>
            <Col>
              <HospitalSelectionPanel left={false}/>
                <p>Place cards here\</p>
            </Col>
        </Row>
    </Styles>
)   