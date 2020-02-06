import React from 'react';
import { render } from '@testing-library/react';
import ProcedureList from './ProcedureList';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isCompositeComponent } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() })


it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProcedureList procedures={[{"ProviderID":450864,"ProviderName":"BAYLOR SCOTT & WHITE TEXAS SPINE & JOINT HOSPITAL","Discharges":11,"CoveredCharges":61518.1,"TotalPayments":6546,"MedicarePayments":5235.09,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":32.3295,"longitude":-95.2985,"Address":"1814 ROSELAND BOULEVARD","City":"TYLER","RefferalRegion":"TX - Tyler","State":"TX","Zip":75701},
    {"ProviderID":450856,"ProviderName":"SOUTH TEXAS SPINE AND SURGICAL HOSPITAL","Discharges":17,"CoveredCharges":24517.9,"TotalPayments":6702.82,"MedicarePayments":5133.06,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":29.6139,"longitude":-98.4776,"Address":"18600 NORTH HARDY OAK BLVD","City":"SAN ANTONIO","RefferalRegion":"TX - San Antonio","State":"TX","Zip":78258}]}></ProcedureList>, div)
})

it('renders searchbar correctly', () => {
    function callBack() {
        console.log("called back")
    }


    render(<ProcedureList procedures={[{"ProviderID":450864,"ProviderName":"BAYLOR SCOTT & WHITE TEXAS SPINE & JOINT HOSPITAL","Discharges":11,"CoveredCharges":61518.1,"TotalPayments":6546,"MedicarePayments":5235.09,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":32.3295,"longitude":-95.2985,"Address":"1814 ROSELAND BOULEVARD","City":"TYLER","RefferalRegion":"TX - Tyler","State":"TX","Zip":75701},
    {"ProviderID":450856,"ProviderName":"SOUTH TEXAS SPINE AND SURGICAL HOSPITAL","Discharges":17,"CoveredCharges":24517.9,"TotalPayments":6702.82,"MedicarePayments":5133.06,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":29.6139,"longitude":-98.4776,"Address":"18600 NORTH HARDY OAK BLVD","City":"SAN ANTONIO","RefferalRegion":"TX - San Antonio","State":"TX","Zip":78258}]}></ProcedureList>)
})


it("matches snapshot", () => {
    function callBack() {
        console.log("called back")
    }
    const tree = renderer.create(<ProcedureList procedures={[{"ProviderID":450864,"ProviderName":"BAYLOR SCOTT & WHITE TEXAS SPINE & JOINT HOSPITAL","Discharges":11,"CoveredCharges":61518.1,"TotalPayments":6546,"MedicarePayments":5235.09,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":32.3295,"longitude":-95.2985,"Address":"1814 ROSELAND BOULEVARD","City":"TYLER","RefferalRegion":"TX - Tyler","State":"TX","Zip":75701},
    {"ProviderID":450856,"ProviderName":"SOUTH TEXAS SPINE AND SURGICAL HOSPITAL","Discharges":17,"CoveredCharges":24517.9,"TotalPayments":6702.82,"MedicarePayments":5133.06,"GPDID":520,
    "DRGDefinition":"BACK & NECK PROC EXC SPINAL FUSION W/O CC/MCC","Latitude":29.6139,"longitude":-98.4776,"Address":"18600 NORTH HARDY OAK BLVD","City":"SAN ANTONIO","RefferalRegion":"TX - San Antonio","State":"TX","Zip":78258}]}></ProcedureList>)
    expect(tree).toMatchSnapshot();
    // expect(true).toBeTruthy();
})

