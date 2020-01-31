import React, { Component } from 'react'
import ProcedureList from './ProcedureList';
import ProvCard from './ProvCard'
import HospitalsMap from '../components/HospitalsMap';

var locations = new Array(

)

export default class HospitalSelectionPanel extends Component {


    getLocals(){
      var json = this.state.procedures;
      var y=0;
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if(obj.State=="TX" && y<500){
          y++;
          var innerRecord = { lat: obj.Latitude, lng: obj.longitude }
          var record = [obj.ProviderName, innerRecord]
          locations.push(record)
        }
        
    }
    console.log(locations);
    }

    constructor(props) {
        super(props);
        this.state = {value: '', procedures: ''};
      }

    getProcedures = () => {
        fetch('https://api.urbelis.dev/providers' , {
          mode: 'cors',
          method: 'GET',
          headers:{
            'Access-Control-Allow-Origin':'*'
          },},).then(response => {
          if (response.ok) {
            response.json().then(data => this.setState({ 'procedures': data }))
          }
        });
      }

    render() {
        this.getProcedures()
        
        if (this.state.procedures) {
            if(this.props.left == true){
              this.getLocals()  
              console.log(this.state)
              return(
                  <HospitalsMap hospList={locations} hi={"70vh"} wi={"35vw"}/>
              )
            }
            return this.state.procedures.map((card) => (
              
               <ProvCard card={card} key={card.id} locations={locations}/>
               
                
                )
            );
            
          } else {
            return (
              <>
              
              </>
            );
          }
    }
}
