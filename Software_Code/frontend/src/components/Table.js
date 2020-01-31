import React from 'react';
import ReactDOM from 'react-dom';
import './../App.css';


class Table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          HospitalProviders: [
             { id: 1, Hospitalname: 'Wasif', Address: "yolo, USA", City: 'Boston', State: 'AL', Zip: 10101, RefferralRegion: "AL - BB" },
             { id: 2, Hospitalname: 'Ali', Address: "West virginia", City: 'Chicago', State: 'AL', Zip: 10101 , RefferralRegion: "AL - BB"},
             { id: 3, Hospitalname: 'Saad', Address: "ur house", City: 'moonsville', State: 'AL', Zip: 10101, RefferralRegion: "AL - BB" },
             { id: 4, Hospitalname: 'Asad', Address: "I'm already running out of ideas", City: 'daknsdmakjdm;', State: 'AL', Zip: 10101, RefferralRegion: "AL - BB" }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.HospitalProviders[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.HospitalProviders.map((HospitalProviders, index) => {
          const { id, Hospitalname, Address, City, State, Zip, RefferralRegion } = HospitalProviders //destructuring
          return (
            
             <tr key={id}> 
                <td>{id}</td>
                <td>{Hospitalname}</td>
                <td>{Address}</td>
                <td>{City}</td>
                <td>{State}</td>
                <td>{Zip}</td>
                <td>{RefferralRegion}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>Hospital Providers</h1>
             <table id='Hospital Providers'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));

 export default Table